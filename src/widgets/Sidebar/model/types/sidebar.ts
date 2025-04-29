export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
}
