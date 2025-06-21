export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
}
