import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const names = [
  "Pastor João Silva",
  "Maria Santos",
  "Carlos Oliveira",
  "Ana Paula",
  "Roberto Costa",
  "Fernanda Lima",
  "Marcos Souza",
  "Juliana Alves",
  "Paulo Mendes",
  "Cristina Rocha",
  "Daniel Ferreira",
  "Beatriz Martins",
  "Lucas Pereira",
  "Camila Rodrigues",
  "Pedro Henrique",
];

const cities = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Belo Horizonte - MG",
  "Brasília - DF",
  "Curitiba - PR",
  "Porto Alegre - RS",
  "Salvador - BA",
  "Fortaleza - CE",
  "Recife - PE",
  "Goiânia - GO",
  "Campinas - SP",
  "Manaus - AM",
  "Florianópolis - SC",
  "Vitória - ES",
  "João Pessoa - PB",
];

export const usePurchaseNotifications = () => {
  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const minutesAgo = Math.floor(Math.random() * 15) + 1;

      toast({
        title: "✅ Nova compra realizada!",
        description: `${randomName} de ${randomCity} acabou de comprar (há ${minutesAgo} ${minutesAgo === 1 ? "minuto" : "minutos"})`,
        duration: 4000,
      });
    };

    // Primeira notificação após 5 segundos
    const firstTimeout = setTimeout(showNotification, 5000);

    // Notificações subsequentes a cada 20-40 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 20000 + 20000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);
};
