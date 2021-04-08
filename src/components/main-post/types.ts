export interface MainPostProps {
  title: string;
  author: string;
  preview: {
    images?: Array<{
      source: {
        url: string;
      };
    }>;
  };
}
