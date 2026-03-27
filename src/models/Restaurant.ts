class Restaurant {
  title: string
  rating: number
  category: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    title: string,
    rating: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    id: number,
  ) {
    this.title = title
    this.rating = rating
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.id = id
  }
}

export default Restaurant
