import type { CSSProperties, SVGAttributes } from "react";
import accessibilityLinear from "@iconify-icons/solar/accessibility-linear";
import boltLinear from "@iconify-icons/solar/bolt-linear";
import cameraLinear from "@iconify-icons/solar/camera-linear";
import chartSquareLinear from "@iconify-icons/solar/chart-square-linear";
import codeCircleLinear from "@iconify-icons/solar/code-circle-linear";
import codeSquareLinear from "@iconify-icons/solar/code-square-linear";
import compassLinear from "@iconify-icons/solar/compass-linear";
import eyeLinear from "@iconify-icons/solar/eye-linear";
import globalLinear from "@iconify-icons/solar/global-linear";
import layersMinimalisticLinear from "@iconify-icons/solar/layers-minimalistic-linear";
import letterLinear from "@iconify-icons/solar/letter-linear";
import magicStick3Linear from "@iconify-icons/solar/magic-stick-3-linear";
import mailboxLinear from "@iconify-icons/solar/mailbox-linear";
import mapPointLinear from "@iconify-icons/solar/map-point-linear";
import mapPointWaveLinear from "@iconify-icons/solar/map-point-wave-linear";
import paletteRoundLinear from "@iconify-icons/solar/palette-round-linear";
import restartLinear from "@iconify-icons/solar/restart-linear";
import rocket2Linear from "@iconify-icons/solar/rocket-2-linear";
import serverPathLinear from "@iconify-icons/solar/server-path-linear";
import shieldCheckLinear from "@iconify-icons/solar/shield-check-linear";
import smartphoneLinear from "@iconify-icons/solar/smartphone-linear";
import starsLineDuotone from "@iconify-icons/solar/stars-line-duotone";
import targetLinear from "@iconify-icons/solar/target-linear";
import usersGroupRoundedLinear from "@iconify-icons/solar/users-group-rounded-linear";
import widget3Linear from "@iconify-icons/solar/widget-3-linear";
import widgetLinear from "@iconify-icons/solar/widget-linear";
import windowFrameLinear from "@iconify-icons/solar/window-frame-linear";
import figma from "@iconify-icons/simple-icons/figma";
import git from "@iconify-icons/simple-icons/git";
import github from "@iconify-icons/simple-icons/github";
import javascript from "@iconify-icons/simple-icons/javascript";
import nextdotjs from "@iconify-icons/simple-icons/nextdotjs";
import nodedotjs from "@iconify-icons/simple-icons/nodedotjs";
import npm from "@iconify-icons/simple-icons/npm";
import tailwindcss from "@iconify-icons/simple-icons/tailwindcss";
import typescript from "@iconify-icons/simple-icons/typescript";
import vercel from "@iconify-icons/simple-icons/vercel";
import visualstudiocode from "@iconify-icons/simple-icons/visualstudiocode";

type IconData = {
  width?: number;
  height?: number;
  body: string;
};

type IconifyProps = Omit<SVGAttributes<SVGSVGElement>, "color"> & {
  icon: string;
  style?: CSSProperties;
};

const iconMap: Record<string, IconData> = {
  "solar:accessibility-linear": accessibilityLinear,
  "solar:bolt-linear": boltLinear,
  "solar:camera-linear": cameraLinear,
  "solar:chart-square-linear": chartSquareLinear,
  "solar:code-circle-linear": codeCircleLinear,
  "solar:code-square-linear": codeSquareLinear,
  "solar:compass-linear": compassLinear,
  "solar:eye-linear": eyeLinear,
  "solar:global-linear": globalLinear,
  "solar:layers-minimalistic-linear": layersMinimalisticLinear,
  "solar:letter-linear": letterLinear,
  "solar:magic-stick-3-linear": magicStick3Linear,
  "solar:mailbox-linear": mailboxLinear,
  "solar:map-point-linear": mapPointLinear,
  "solar:map-point-wave-linear": mapPointWaveLinear,
  "solar:palette-round-linear": paletteRoundLinear,
  "solar:restart-linear": restartLinear,
  "solar:rocket-2-linear": rocket2Linear,
  "solar:server-path-linear": serverPathLinear,
  "solar:shield-check-linear": shieldCheckLinear,
  "solar:smartphone-linear": smartphoneLinear,
  "solar:stars-line-duotone": starsLineDuotone,
  "solar:target-linear": targetLinear,
  "solar:users-group-rounded-linear": usersGroupRoundedLinear,
  "solar:widget-3-linear": widget3Linear,
  "solar:widget-linear": widgetLinear,
  "solar:window-frame-linear": windowFrameLinear,
  "simple-icons:figma": figma,
  "simple-icons:git": git,
  "simple-icons:github": github,
  "simple-icons:javascript": javascript,
  "simple-icons:nextdotjs": nextdotjs,
  "simple-icons:nodedotjs": nodedotjs,
  "simple-icons:npm": npm,
  "simple-icons:tailwindcss": tailwindcss,
  "simple-icons:typescript": typescript,
  "simple-icons:vercel": vercel,
  "simple-icons:visualstudiocode": visualstudiocode
};

export function Iconify({ icon, className, style, ...props }: IconifyProps) {
  const iconData = iconMap[icon];

  if (!iconData) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${iconData.width ?? 24} ${iconData.height ?? 24}`}
      width="1em"
      height="1em"
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: iconData.body }}
      {...props}
    />
  );
}
