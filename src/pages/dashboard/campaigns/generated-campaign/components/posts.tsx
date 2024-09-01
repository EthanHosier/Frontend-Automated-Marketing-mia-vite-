import { Button } from "@/components/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import SocialMediaPost from "@/components/widgets/social-media-post";
import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";

const allSocialMedias: SocialMediaPlatform[] = [
  "instagram",
  "linkedIn",
  "facebook",
  "twitter-x",
  "whatsapp",
] as SocialMediaPlatform[];

const Posts = () => {
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          skipSnaps: true,
        }}
      >
        <CarouselContent className="-ml-[32px]">
          {allSocialMedias.map((platform: SocialMediaPlatform) => (
            <CarouselItem
              key={platform}
              className="flex justify-center md:basis-[432px] pl-[32px]"
            >
              <SocialMediaPost
                key={platform}
                image="https://via.placeholder.com/150"
                caption="caption"
                businessName="businessName"
                platform={platform}
                loading
                className=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default Posts;
