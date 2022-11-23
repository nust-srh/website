import React, { useState, useEffect } from 'react'
import {
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material'
import Slider from 'react-slick'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { collection, query, onSnapshot } from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props: any) {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos
                style={{
                    color: '#f36a11',
                    fontSize: '30px',
                    marginRight: '-20px',
                }}
            />
        </div>
    )
}

function SamplePrevArrow(props: any) {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos
                style={{
                    color: '#f36a11',
                    fontSize: '30px',
                    marginLeft: '-20px',
                }}
            />
        </div>
    )
}

const Gallery = () => {
    const [pictures, setPictures] = useState<any[]>([])

    useEffect(() => {
        const q = query(collection(db, 'Pictures'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let PicturesArray: any = []
            querySnapshot.forEach((doc) => {
                PicturesArray.push({ ...doc.data(), id: doc.id })
            })
            setPictures(PicturesArray)
        })
        return () => unsub()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <Container maxWidth="lg" sx={{ padding: '20px' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{ color: '#f36a11', fontWeight: 'bold' }}
            >
                Photo Gallery
            </Typography>
            <Container
                maxWidth="lg"
                sx={{ paddingTop: '20px', paddingBottom: '20px' }}
            >
                <Slider {...settings}>
                    {pictures.map((picture, i) => {
                        return (
                            <div>
                                <Card
                                    sx={{
                                        width: '300',
                                        height: '350',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        boxShadow: 'none',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ objectFit: 'contain' }}
                                        height="300px"
                                        width="300px"
                                        image={picture?.imageUrl}
                                        alt={picture?.abstract}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            align="center"
                                        >
                                            {picture?.abstract}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </Slider>
            </Container>
        </Container>
    )
}

export default Gallery
