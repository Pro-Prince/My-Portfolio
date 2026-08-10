import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function getDeviceType() {
  const ua = navigator.userAgent
  if (/Mobi|Android/i.test(ua)) return 'Mobile'
  if (/Tablet|iPad/i.test(ua)) return 'Tablet'
  return 'Desktop'
}

function getBrowser() {
  const ua = navigator.userAgent
  if (ua.includes('Edg')) return 'Edge'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Safari')) return 'Safari'
  return 'Other'
}

function isDevOrPreviewEnvironment() {
  const hostname = window.location.hostname
  const blockedPatterns = [
    'localhost',
    '127.0.0.1',
    'aistudio.google.com',
    '.run.app',
    '.googleusercontent.com',
    'webcontainer',
    'stackblitz',
  ]
  return blockedPatterns.some(pattern => hostname.includes(pattern))
}

function getOrCreateSessionId() {
  const existing = sessionStorage.getItem('visitor_session_id')
  if (existing) return existing
  const newId = crypto.randomUUID()
  sessionStorage.setItem('visitor_session_id', newId)
  return newId
}

async function getVisitorIP() {
  const cached = sessionStorage.getItem('visitor_ip')
  if (cached) return cached

  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    sessionStorage.setItem('visitor_ip', data.ip)
    return data.ip
  } catch (error) {
    console.error('Failed to fetch visitor IP:', error)
    return 'unknown'
  }
}

async function getVisitorLocation() {
  const cached = sessionStorage.getItem('visitor_location')
  if (cached) return cached

  // Try primary service: ipapi.co
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    if (data.city) {
      const location = [data.city, data.region, data.country_name]
        .filter(Boolean)
        .join(', ')
      sessionStorage.setItem('visitor_location', location)
      return location
    }
  } catch (error) {
    console.error('Primary geolocation service failed:', error)
  }

  // Fallback service: ipwho.is
  try {
    const response = await fetch('https://ipwho.is/')
    const data = await response.json()
    if (data.success !== false && data.city) {
      const location = [data.city, data.region, data.country]
        .filter(Boolean)
        .join(', ')
      sessionStorage.setItem('visitor_location', location)
      return location
    }
  } catch (error) {
    console.error('Fallback geolocation service failed:', error)
  }

  // Both services failed — return Unknown, do not block visit logging
  sessionStorage.setItem('visitor_location', 'Unknown')
  return 'Unknown'
}

export function useVisitLogger() {
  const location = useLocation()
  const lastLoggedRef = useRef<{ path: string; time: number }>({ path: '', time: 0 })

  useEffect(() => {
    if (location.pathname.startsWith('/admin')) return

    const logVisit = async () => {
      if (isDevOrPreviewEnvironment() || import.meta.env.DEV) {
        return
      }

      const now = Date.now()
      if (
        lastLoggedRef.current.path === location.pathname &&
        now - lastLoggedRef.current.time < 1000
      ) {
        return
      }
      lastLoggedRef.current = { path: location.pathname, time: now }

      if (!supabase) return

      try {
        const visitorIP = await getVisitorIP()
        const visitorLocation = await getVisitorLocation()

        await supabase.from('page_visits').insert({
          page_path: location.pathname,
          referrer: document.referrer || 'Direct',
          device_type: getDeviceType(),
          browser: getBrowser(),
          session_id: getOrCreateSessionId(),
          ip_address: visitorIP,
          location: visitorLocation,
        })
      } catch (error) {
        console.error('Visit logging failed:', error)
      }
    }

    logVisit()
  }, [location.pathname])
}
