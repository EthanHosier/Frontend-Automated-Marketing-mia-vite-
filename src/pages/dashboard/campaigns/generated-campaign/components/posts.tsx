import { Post } from "@/api/campaigns/types";
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

interface PostsProps {
  isLoading: boolean;
  posts?: Post[];
  businessName: string;
}

const defaultPosts: Post[] = allSocialMedias.map((platform) => ({
  platform,
  caption: "caption",
  design: {
    created_at: 0,
    id: "id",
    title: "title",
    updated_at: 0,
    thumbnail: {
      url: "url",
    },
    url: "url",
    urls: {
      edit_url: "edit_url",
      view_url: "view_url",
    },
  },
}));

const Posts: React.FC<PostsProps> = ({ isLoading, posts, businessName }) => {
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          skipSnaps: true,
        }}
      >
        <CarouselContent className="-ml-[32px]">
          {(posts ?? defaultPosts).map((post: Post) => (
            <CarouselItem
              key={post.platform}
              className="flex justify-center md:basis-[432px] pl-[32px]"
            >
              <SocialMediaPost
                key={post.platform}
                image={post.design.thumbnail.url}
                caption={post.caption}
                businessName={businessName}
                platform={post.platform as SocialMediaPlatform}
                loading={isLoading}
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
