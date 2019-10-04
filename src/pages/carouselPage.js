import React from "react";
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView,  MDBContainer } from
        "mdbreact";
import * as myConsts from './Constants'



const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                 length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    {
                        myConsts.images.map((item) => {
                            return(
                                <MDBCarouselItem itemId={item.id}>
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src={item.src}
                                            alt={item.alt}
                                        />
                                    </MDBView>
                                </MDBCarouselItem>
                            );
                        })
                    }

                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;