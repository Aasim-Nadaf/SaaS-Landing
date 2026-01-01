import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";

export const SkeletonOne = () => {
  return (
    <div
      className="w-full h-full relative min-h-96 perspective-distant transform-3d -translate-y-10 translate-x-4"
      style={{
        transform: "rotateX(30deg) rotateY(-20deg) rotateZ(15deg) scale(1.3)",
      }}
    >
      <SkeletonCard
        className="absolute bottom-0 left-0 right-0 mx-auto w-[90%] max-w-[90%] z-30"
        title="Initializing Aura Agent"
        description="Create a custom Aura Agent tailored to your workspace needs. Provide specific instructions and configurations to ensure optimal performance."
        badge={<Badge text="120S" />}
        icon={<IconCircleDashedCheck className="size-5" />}
      />
      <SkeletonCard
        className="absolute bottom-16 left-0 right-0 mx-auto w-[90%] max-w-[90%] z-20"
        title="Configuring Environment"
        description="Create a custom Aura Agent tailored to your workspace needs. Provide specific instructions and configurations to ensure optimal performance."
        badge={<Badge text="90S" varient="danger" />}
        icon={<IconExclamationCircle className="size-5" />}
      />
      <SkeletonCard
        className="absolute bottom-32 left-0 right-0 mx-auto w-[90%] max-w-[90%]"
        title="Deploying to Workspace"
        description="Create a custom Aura Agent tailored to your workspace needs. Provide"
        badge={<Badge text="40S" varient="warning" />}
        icon={<IconPrison className="size-5" />}
      />
    </div>
  );
};

export const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
  style,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={cn(
        "max-w-[85%] h-fit bg-neutral-100 mx-auto w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        <div className="text-sm font-semibold text-black dark:text-white">
          {title}
        </div>
        {badge}
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3">
        {description}
      </p>

      <div className="flex items-center flex-wrap gap-2 mt-2">
        <Tag text="Custom" />
        <Tag text="Agent" />
        <Tag text="Workspace" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="px-2 py-1 text-xs rounded-sm bg-neutral-200 dark:bg-neutral-700">
      {text}
    </div>
  );
};

const Badge = ({
  varient = "success",
  text,
}: {
  varient?: "success" | "warning" | "danger";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "p-1 rounded-full flex items-center gap-1",

        varient === "success" &&
          "bg-green-200/40 border border-green-300 text-green-600",

        varient === "danger" &&
          "bg-red-200/40 border border-red-300 text-red-600",

        varient === "warning" &&
          "bg-yellow-200/40 border border-yellow-300 text-yellow-600"
      )}
    >
      <IconClock className={cn("size-4")} />
      <IconRipple className={cn("size-4")} />
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};
