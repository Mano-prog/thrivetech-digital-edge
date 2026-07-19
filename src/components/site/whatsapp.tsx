import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918072854541"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/60 blur-xl group-hover:bg-emerald-500 transition" />
      <span className="relative flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3.5 shadow-lg hover:brightness-110 transition">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </span>
    </motion.a>
  );
}
