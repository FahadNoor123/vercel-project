import React, { useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const IMAGES = [
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505682634904-d7c6e674a3f8?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop'
]

function Lightbox({ src, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="preview"
          className="max-h-[80vh] w-auto rounded-lg shadow-2xl transform transition-transform duration-300 ease-out"
        />

        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full bg-white/90 p-1 shadow"
          aria-label="close"
        >
          <X className="h-5 w-5" />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
          aria-label="previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
          aria-label="next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [index, setIndex] = useState(null)

  const open = useCallback((i) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(() => setIndex((s) => (s === 0 ? IMAGES.length - 1 : s - 1)), [])
  const next = useCallback(() => setIndex((s) => (s === IMAGES.length - 1 ? 0 : s + 1)), [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
        <p className="mt-2 text-gray-600">A collection of images — click to preview.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((src, i) => (
          <button
            key={src + i}
            onClick={() => open(i)}
            className="group overflow-hidden rounded-lg bg-gray-50 shadow-sm"
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={src}
              loading="lazy"
              alt={`img-${i}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-2">
              <div className="text-sm font-semibold text-gray-800 truncate">Photo {i + 1}</div>
              <div className="text-xs text-gray-500">Unsplash</div>
            </div>
          </button>
        ))}
      </div>

      {index !== null && (
        <Lightbox src={IMAGES[index]} onClose={close} onPrev={prev} onNext={next} />
      )}
    </div>
  )
}
