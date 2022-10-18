import * as styled from './styles';

type BannerProps = {
  title: string;
  subTitle: string;
  price: number;
  bannerUrl: string;
};

export function ComboProducts({
  bannerUrl,
  price,
  subTitle,
  title,
}: BannerProps) {
  return (
    <styled.ComboProducts>
      <styled.Content>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <span>R$ {price}</span>
      </styled.Content>
      <styled.ImgBanner>
        <img src={bannerUrl} alt={title} />
      </styled.ImgBanner>
    </styled.ComboProducts>
  );
}
