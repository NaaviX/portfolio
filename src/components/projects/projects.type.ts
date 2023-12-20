import {Theme} from "@emotion/react";
import {SxProps} from "@mui/material";
import {FC, SVGProps} from "react";

export interface ProjectStack {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | undefined;
}
export interface Project {
  name: string;
  type: "WEB" | "MOBILE" | "APP";
  description: string;
  year: string;
  stack: ProjectStack[];

  images: string[];
}

export interface ProjectSection {
  style: SxProps<Theme>;
  projects: Project[];
}
