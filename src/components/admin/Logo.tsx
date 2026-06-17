import React from 'react'

export function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0' }}>
      <span style={{ fontSize: '32px' }}>🌿</span>
      <span style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: 'bold', color: 'currentColor', letterSpacing: '-0.5px' }}>Ruba</span>
    </div>
  )
}

export function Icon() {
  return (
    <div style={{ fontSize: '24px', backgroundColor: 'var(--theme-elevation-150, #222)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', border: '1px solid var(--theme-elevation-200, #333)' }}>
      <span style={{ fontSize: '22px' }}>🌿</span>
    </div>
  )
}
