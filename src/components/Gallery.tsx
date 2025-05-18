import styled from "styled-components";

export default function Gallery({ productData }: IProductInfoProps) {
  return (
    <>
      <GalleryContainer>
        <TwoImagesWrap>
          <GalleryImageContainer>
            <source
              media="(min-width:1440px)"
              srcSet={productData.gallery.first.desktop}
            />
            <source
              media="(min-width:769px)"
              srcSet={productData.gallery.first.tablet}
            />
            <source
              media="(max-width:768px)"
              srcSet={productData.gallery.first.mobile}
            />

            <GalleryImage
              src={productData.gallery.first.mobile}
              alt="gallery image"
            />
          </GalleryImageContainer>
          <GalleryImageContainer>
            <source
              media="(min-width:1440px)"
              srcSet={productData.gallery.second.desktop}
            />
            <source
              media="(min-width:769px)"
              srcSet={productData.gallery.second.tablet}
            />
            <source
              media="(max-width:768px)"
              srcSet={productData.gallery.second.mobile}
            />

            <GalleryImage
              src={productData.gallery.second.mobile}
              alt="gallery image"
            />
          </GalleryImageContainer>
        </TwoImagesWrap>
        <GalleryImageContainer>
          <source
            media="(min-width:1440px)"
            srcSet={productData.gallery.third.desktop}
          />
          <source
            media="(min-width:769px)"
            srcSet={productData.gallery.third.tablet}
          />
          <source
            media="(max-width:768px)"
            srcSet={productData.gallery.third.mobile}
          />

          <GalleryImage
            src={productData.gallery.third.mobile}
            alt="gallery image"
          />
        </GalleryImageContainer>
        <GalleryImageContainer></GalleryImageContainer>
        <GalleryImageContainer></GalleryImageContainer>
      </GalleryContainer>
    </>
  );
}

const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
`;

const GalleryImageContainer = styled.picture``;

const TwoImagesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 48rem) {
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
