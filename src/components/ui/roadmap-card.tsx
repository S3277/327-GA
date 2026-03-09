import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({
  items,
}: RoadmapCardProps) {
  return (
    <Card className="w-full max-w-4xl bg-slate-900/50 border-slate-800">
      <CardContent className="pt-6">
        <div className="relative">
          <div className="absolute left-0 right-0 top-4 h-px bg-primary/20" />

          <div className="flex justify-between">
          {items.map((item, index) => (
              <motion.div
                key={index}
                className="relative pt-8 text-center w-1/4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full flex items-center justify-center ${
                    item.status === "done" || item.status === "in-progress"
                      ? "bg-primary"
                      : "bg-slate-700"
                  }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                </motion.div>

                <Badge
                  variant={
                    item.status === "done" || item.status === "in-progress"
                      ? "default"
                      : "outline"
                  }
                  className="mb-2 text-[11px]"
                >
                  {item.quarter}
                </Badge>

                <h4 className="text-sm font-bold text-slate-100 uppercase mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
