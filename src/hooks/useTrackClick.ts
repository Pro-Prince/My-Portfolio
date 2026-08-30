import { supabase } from '../lib/supabase'

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

export function trackProjectClick(
  projectName: string,
  buttonType: 'live_demo' | 'github'
) {
  if (isDevOrPreviewEnvironment() || import.meta.env.DEV) {
    return
  }
  
  if (!supabase) return

  const track = async () => {
    try {
      await supabase
        .from('project_clicks')
        .insert({ project_name: projectName, button_type: buttonType })
    } catch (err) {
      console.error('Click tracking failed:', err)
    }
  }
  track()
}
