export interface PostCardProps {
  id: string;
  title: string;
  thumbnail: string;
  author: string;
  num_comments: number;
  created_utc: number;
  onDissmissPost: () => void;
}
