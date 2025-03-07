export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
}
