export interface WorkTagsProps {
  tag:
    | "Mobile Apps"
    | "SaaS"
    | "Desktop Apps"
    | "Crazy Projects"
    | "Non-boring Websites";
}

export interface WorkFrontmatterProps {
  title: string;
  abstract: string;
  desktopCover: string;
  mobileCover: string;
  coverAltText: string;
  brand: string;
  tags: tag[];
  isPublished: boolean;
  publishedOn: string;
  updatedOn: string;
}
