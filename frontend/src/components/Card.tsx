import type book from "../types/book"

const Card = ({name,description,author}:book) => {
  return (
    <div className="w-50 h-65 m-3 border rounded-2xl p-3">
        <h1 className="text-xl underline mb-6">{name}</h1>
        <p className="text-sm">{description}</p>
        <p className="text-xs text-right">{author}</p>
    </div>
  )
}

export default Card