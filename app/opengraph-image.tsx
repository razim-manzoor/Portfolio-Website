import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Razim Manzoor Portfolio'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    {/* Simple Text Logo */}
                    <div style={{ fontWeight: 'bold' }}>RAZIM.</div>
                </div>
                <div style={{ fontSize: 40, marginTop: 40, color: '#A0A0A0' }}>
                    Business Analyst & AI Strategist
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
