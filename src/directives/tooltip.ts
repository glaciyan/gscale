import {
  computePosition,
  offset,
  shift,
  flip,
  arrow,
  Middleware,
} from "@floating-ui/dom";
import { useEventListener } from "@vueuse/core";
import { App } from "vue";

interface TooltipOptions {
  tooltipId: string;
  tooltipContentId: string;
  tooltipArrowId?: string;
  offset?: number;
  shiftPadding?: number;
  arrowPadding?: number;
}

export default (app: App<Element>, options: TooltipOptions) => {
  const tooltip = document.querySelector(`#${options.tooltipId}`) as HTMLDivElement;
  const tooltipContent = document.querySelector(
    `#${options.tooltipContentId}`
  ) as HTMLDivElement;
  const arrowElement = document.querySelector(
    `#${options.tooltipArrowId}`
  ) as HTMLDivElement | null;

  const showTooltip = (el: any, content: string, placement: any) => {
    tooltipContent.innerText = content;

    const middleware: Middleware[] = [
      offset(options.offset ?? 0),
      shift({ padding: options.shiftPadding ?? 0 }),
      flip(),
    ];
    if (arrowElement !== null) {
      middleware.push(
        arrow({ element: arrowElement, padding: options.arrowPadding ?? 0 })
      );
    }

    computePosition(el, tooltip, {
      placement,
      middleware,
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(tooltip.style, {
        transform: `translate(${x}px, ${y}px)`,
        opacity: "1",
      });

      if (arrowElement !== null) {
        const arrowData = middlewareData.arrow;

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]]!;

        Object.assign(arrowElement!.style, {
          left: arrowData?.x != null ? `${arrowData.x}px` : "",
          top: arrowData?.y != null ? `${arrowData.y}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-4px",
        });
      } else if (options.tooltipArrowId) {
        console.warn("Tooltip Directive: Arrow id is defined but that id wasn't found");
      }
    });
  };

  const hideTooltip = () => {
    Object.assign(tooltip.style, {
      opacity: "0",
    });
  };

  app.directive("tooltip", {
    mounted(el, binding) {
      console.log(el.innerText, binding.value, binding.arg);

      if (!binding.arg) binding.arg = "top";

      useEventListener(el, "mouseenter", () =>
        showTooltip(el, binding.value, binding.arg!)
      );
      useEventListener(el, "mouseleave", hideTooltip);
    },
  });
};
