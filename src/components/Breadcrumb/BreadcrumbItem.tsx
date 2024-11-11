import React from "react"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

interface Props {
  link: string
  title: string
}

const BreadcrumbItem: React.FC<Props> = ({ link, title }) => {
  return (
    <div className="breadcrumb-block w-full lg:h-[280px] sm:h-[260px] h-[240px] relative bg-dark">
      <div className="container relative h-full flex items-center justify-start pl-8">
        {" "}
        {/* Added pl-8 for left padding */}
        <div className="text-nav">
          <div className="heading3 text-white">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbItem
