import { siteData } from "@/data/siteData";

function whatsappUrl(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export function AdminContacts() {
  const { admins } = siteData;

  if (admins.length === 0) {
    return (
      <div className="border border-dashed border-navy/20 bg-glacier/60 px-6 py-8">
        <p className="text-sm leading-relaxed text-muted">
          Les contacts des administrateurs seront bientôt publiés ici. En
          attendant, écrivez-nous à{" "}
          <a
            href={`mailto:${siteData.association.email}`}
            className="text-navy underline decoration-gold underline-offset-4"
          >
            {siteData.association.email}
          </a>{" "}
          pour rejoindre le groupe WhatsApp officiel.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {admins.map((admin) => (
        <li
          key={admin.id}
          className="flex flex-col justify-between gap-4 border border-navy/10 bg-white px-5 py-5"
        >
          <div>
            <p className="font-display text-xl text-navy">{admin.name}</p>
            {admin.role && (
              <p className="mt-1 text-sm text-muted">{admin.role}</p>
            )}
          </div>
          <a
            href={whatsappUrl(admin.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition hover:brightness-95"
          >
            Contacter sur WhatsApp
          </a>
        </li>
      ))}
    </ul>
  );
}
