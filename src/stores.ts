import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type FileSystem from 'webnative/fs/index'

import { loadTheme } from '$lib/theme'
import { AREAS } from '$lib/gallery'
import type { Gallery } from '$lib/gallery'
import type { Notification } from '$lib/notifications'
import type { Session } from '$lib/session'
import type { Theme } from '$lib/theme'

export const themeStore: Writable<Theme> = writable(loadTheme())

export const sessionStore: Writable<Session> = writable({
  username: null,
  authed: false,
  loading: true,
  backupCreated: null
})

export const filesystemStore: Writable<FileSystem | null> = writable(null)

export const galleryStore: Writable<Gallery> = writable({
  loading: true,
  publicImages: [],
  privateImages: [],
  selectedArea: AREAS.PUBLIC,
})

export const notificationStore: Writable<Notification[]> = writable([])
