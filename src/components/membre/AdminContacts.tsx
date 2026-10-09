import { MessageCircle, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

function whatsappUrl(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export function AdminContacts() {
  const { admins, association } = siteConfig;

  if (admins.length === 0) {
    return (
      <Card className="hover:scale-100">
        <CardHeader>
          <Badge variant="amber" className="w-fit">
            Bientôt disponible
          </Badge>
          <CardTitle className="mt-3">Administrateurs WhatsApp</CardTitle>
          <CardDescription>
            Les contacts des administrateurs seront publiés ici. En attendant,
            écrivez-nous pour rejoindre le groupe officiel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline">
            <a href={`mailto:${association.email}`}>
              <Mail className="h-4 w-4" />
              {association.email}
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {admins.map((admin) => (
        <li key={admin.id}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{admin.name}</CardTitle>
              {admin.role && <CardDescription>{admin.role}</CardDescription>}
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-[#25D366] text-white hover:bg-[#1ebd5a] hover:shadow-md">
                <a
                  href={whatsappUrl(admin.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contacter sur WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
