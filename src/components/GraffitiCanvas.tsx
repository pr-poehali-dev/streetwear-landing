import { useRef, useEffect, useState } from "react";

const GraffitiCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Настройка canvas
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000000";

    setContext(ctx);

    // Добавляем подпись SPOT в углу
    ctx.font = "20px Rubik, sans-serif";
    ctx.fillStyle = "#8E9196";
    ctx.fillText("SPOT WALL", 20, 40);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return;
    setIsDrawing(true);

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.beginPath();
    context.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!context || !canvasRef.current) return;
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Восстанавливаем подпись
    context.font = "20px Rubik, sans-serif";
    context.fillStyle = "#8E9196";
    context.fillText("SPOT WALL", 20, 40);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-black">Граффити-стена</h3>
        <button
          onClick={clearCanvas}
          className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Очистить
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-gray-200 rounded cursor-crosshair w-full max-w-md mx-auto block"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

      <p className="text-sm text-gray-500 text-center mt-2">
        Оставь свой след на стене SPOT
      </p>
    </div>
  );
};

export default GraffitiCanvas;
