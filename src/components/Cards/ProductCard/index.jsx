import React from "react"
import Image from "next/image"
import Router from "next/router"
import { Card, Container, imageLoader, Item, Segment } from "../../../@fastor"

export function ProductCard({ title, content, image }){
    const [count, setCount] = React.useState(0)

    function handleClick(e){
        console.log(e.target.attributes)
        if(count > 9){
            return setCount(0)
        }
        setCount(count+1)
    }

    return (
        <Card>
            <Container move="yr">
                <Segment h="50vh" space="var(--sz90) var(--sz40)" bg="#d7dff0">
                    <Item h="100%" pos="rtv" mx="center">
                        <Image 
                        src={image} 
                        alt={title} 
                        layout="fill"
                        objectFit="cover"
                        loader={imageLoader} />
                    </Item>
                </Segment>

                <Segment>
                    <button data-name="count" onClick={(e) => handleClick(e)}>
                        Likes
                    </button>
                    {count}
                </Segment>
            </Container>
        </Card>
    )
}

ProductCard.defaultProps = {
    title: "Evolve Shoes",
    content: "Evolve canvas shoes.",
    price: "$99.99",
    image: "/shoes.png",
}