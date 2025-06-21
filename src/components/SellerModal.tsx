import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface SellerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SellerModal = ({ open, onOpenChange }: SellerModalProps) => {
  const [formData, setFormData] = useState({
    brandName: "",
    telegram: "",
    website: "",
    name: "",
    phone: "",
    personalTelegram: "",
    city: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка продавца:", formData);
    // Здесь будет логика отправки формы
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Стать продавцом SPOT
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="brandName">Название бренда *</Label>
            <Input
              id="brandName"
              value={formData.brandName}
              onChange={(e) => handleInputChange("brandName", e.target.value)}
              placeholder="Ваш бренд"
              required
            />
          </div>

          <div>
            <Label htmlFor="telegram">Telegram бренда</Label>
            <Input
              id="telegram"
              value={formData.telegram}
              onChange={(e) => handleInputChange("telegram", e.target.value)}
              placeholder="@yourbrand"
            />
          </div>

          <div>
            <Label htmlFor="website">Сайт бренда</Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://yourbrand.com"
            />
          </div>

          <div>
            <Label htmlFor="name">Ваше имя *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Имя и фамилия"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+7 (xxx) xxx-xx-xx"
              required
            />
          </div>

          <div>
            <Label htmlFor="personalTelegram">Личный Telegram *</Label>
            <Input
              id="personalTelegram"
              value={formData.personalTelegram}
              onChange={(e) =>
                handleInputChange("personalTelegram", e.target.value)
              }
              placeholder="@username"
              required
            />
          </div>

          <div>
            <Label htmlFor="city">Город *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Москва"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3"
          >
            <Icon name="Send" size={16} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SellerModal;
