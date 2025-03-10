import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex mb-4 gap-2">
      <AlertCircle className="h-8 w-8 text-red-500" />
      <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
    </div>
  );
}
