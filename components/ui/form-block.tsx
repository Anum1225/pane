import type React from "react"
interface FormBlockProps {
  title: string
  children: React.ReactNode
}

export default function FormBlock({ title, children }: FormBlockProps) {
  return (
    <div className="bg-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
      </div>
      <div className="max-w-lg mx-auto">{children}</div>
    </div>
  )
}
