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

      try {
        await supabase.from('page_visits').insert({
          page_path: location.pathname,
          referrer: document.referrer || 'Direct',
          device_type: getDeviceType(),
          browser: getBrowser(),
        })
      } catch (error) {
        console.error('Visit logging failed:', error)
      }
    }

    logVisit()
  }, [location.pathname])
}
