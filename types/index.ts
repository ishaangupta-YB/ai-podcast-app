import { Dispatch, SetStateAction } from "react";

export interface PodcastCardProps {
  imgUrl: string;
  title: string;
  description: string;
//   podcastId: Id<"podcasts">;
  podcastId: number;
}
