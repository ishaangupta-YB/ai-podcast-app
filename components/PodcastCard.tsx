import { api } from "@/convex/_generated/api";
import { PodcastCardProps } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  const { user } = useUser();
  const podcast = useQuery(api.podcasts.getPodcastById, { podcastId });

  const isOwner = user?.id === podcast?.authorId;

  const router = useRouter();
  const updatePodcastViews = useMutation(api.podcasts.updatePodcastViews);
  const handleViews = async () => {
    if(!isOwner) await updatePodcastViews({ podcastId });
    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
