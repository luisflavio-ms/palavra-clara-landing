import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, CheckCircle2 } from "lucide-react";
import { onBuy } from "@/lib/utils";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { usePurchaseNotifications } from "@/hooks/usePurchaseNotifications";
import heroBible from "@/assets/hero-bible.jpg";
import iconBook from "@/assets/icon-book.png";
import iconPray from "@/assets/icon-pray.png";
import iconIdea from "@/assets/icon-idea.png";
import iconSpeed from "@/assets/icon-speed.png";
import iconDove from "@/assets/icon-dove.png";

const Index = () => {
  usePurchaseNotifications();
  
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(45, 30, 15, 0.75), rgba(45, 30, 15, 0.85)), url(${heroBible})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Entenda e Ensine a Palavra com Mais Clareza!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 font-light">
              Mais de 100 esboços bíblicos prontos para estudos, pregações e devocionais.
            </p>
            <Button variant="hero" size="xl" onClick={onBuy} className="text-lg">
              Quero Meu Pacote Agora
            </Button>
            <p className="mt-6 text-white/80 text-sm">Acesso imediato após a compra</p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Bible Verse Divider */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <Quote className="inline-block w-8 h-8 text-primary mb-2" />
          <p className="text-lg md:text-xl font-serif italic text-foreground/80">
            "A fé vem pelo ouvir, e o ouvir pela Palavra de Deus"
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Romanos 10:17</p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tudo o Que Você Precisa para Crescer na Fé</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recursos completos para aprofundar seus estudos bíblicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: iconBook,
                title: "Mais de 100 Esboços Prontos",
                description: "Uma biblioteca completa de esboços organizados e prontos para uso imediato.",
              },
              {
                icon: iconPray,
                title: "Temas Organizados por Assunto",
                description: "Fé, oração, graça, família e muito mais. Encontre rapidamente o que precisa.",
              },
              {
                icon: iconIdea,
                title: "Fácil de Usar",
                description: "Ideal para estudos pessoais, cultos, células e pregações. Simples e prático.",
              },
              {
                icon: iconSpeed,
                title: "Acesso Imediato",
                description: "Receba tudo instantaneamente após a compra. Comece a usar agora mesmo.",
              },
              {
                icon: iconDove,
                title: "Baseado na Palavra de Deus",
                description: "Conteúdo fundamentado nas Sagradas Escrituras, com excelência e fidelidade.",
              },
              {
                icon: iconBook,
                title: "Materiais em PDF",
                description: "Arquivos otimizados para leitura em qualquer dispositivo, sempre à mão.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-[0_4px_20px_-4px_hsl(30_20%_20%/0.15)] transition-all duration-300 border-border/50"
              >
                <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Milhares de Cristãos Já Estão Estudando com Mais Profundidade!
            </h2>
            <p className="text-lg text-muted-foreground">Veja o que nossos membros estão dizendo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pastor João Silva",
                role: "Igreja Batista Central",
                text: "Os esboços me ajudaram imensamente na preparação das mensagens. Material de excelente qualidade e muito prático!",
              },
              {
                name: "Maria Santos",
                role: "Líder de Célula",
                text: "Facilita muito os estudos nas células. Os temas são bem organizados e baseados na Palavra. Recomendo!",
              },
              {
                name: "Carlos Oliveira",
                role: "Professor EBD",
                text: "Uso nas minhas aulas da Escola Bíblica Dominical. Os alunos amam e eu economizo muito tempo na preparação!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-foreground/90 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Você Vai Receber</h2>
              <p className="text-xl text-muted-foreground">Um pacote completo para transformar seus estudos</p>
            </div>

            <Card className="p-8 md:p-12">
              <div className="space-y-6">
                {[
                  "100+ Esboços Bíblicos Completos e Prontos",
                  "Temas Organizados por Categorias (Fé, Oração, Graça, Família, Salvação, e mais)",
                  "Arquivos em PDF de Alta Qualidade",
                  "Acesso Vitalício ao Material",
                  "Atualizações Gratuitas com Novos Esboços",
                  "Materiais Bônus Exclusivos",
                  "Suporte Rápido por Email",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button variant="hero" size="xl" onClick={onBuy}>
                  Baixar Agora
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bible Verse Divider 2 */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <Quote className="inline-block w-8 h-8 text-primary mb-2" />
          <p className="text-lg md:text-xl font-serif italic text-foreground/80">
            "Lâmpada para os meus pés é a Tua Palavra, e luz para o meu caminho"
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Salmos 119:105</p>
        </div>
      </div>

      {/* Final CTA Section */}
      <section id="cta-section" className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Fortaleça Sua Fé e Leve a Palavra com Poder</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Comece hoje mesmo sua jornada de crescimento espiritual e ensino bíblico de excelência.
            </p>

            <div className="bg-card p-8 rounded-2xl shadow-[0_10px_40px_-10px_hsl(30_20%_20%/0.15)] mb-8 border-2 border-primary/20">
              <div className="mb-6">
                <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-lg mb-4 inline-block">
                  ⚡ PROMOÇÃO VÁLIDA SOMENTE HOJE!
                </div>
                <span className="text-muted-foreground line-through text-2xl">R$ 49,90</span>
                <div className="text-5xl font-bold text-primary mt-2">R$ 14,90</div>
                <p className="text-sm text-muted-foreground mt-2">Oferta especial termina hoje às 23:59</p>
              </div>

              <Button variant="hero" size="xl" onClick={onBuy} className="w-full md:w-auto text-lg">
                Adquirir Agora
              </Button>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Pagamento 100% Seguro
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Acesso Imediato
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Garantia de 7 Dias
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg font-semibold mb-4 text-foreground">Pacote de Esboços Bíblicos</p>
            <p className="text-muted-foreground mb-6">Pagamento Seguro | Acesso Imediato | Suporte Rápido</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contato
              </a>
            </div>
            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>© 2025 Pacote de Esboços Bíblicos. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
