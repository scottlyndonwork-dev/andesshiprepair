import { team } from "@/data/team";

function initials(name: string) {
  return name
    .replace(/^(Mrs\.|Mr\.|Engr\.|Capt\.)\s*/, "")
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function LeadershipGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <div key={member.id} className="rounded-md border border-navy/10 bg-white p-6">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-cyan">
            {initials(member.name)}
          </div>
          <h3 className="text-base font-bold tracking-tight text-text-dark">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-blue">{member.position}</p>
          <p className="mt-1 text-sm text-steel">{member.specialization}</p>
        </div>
      ))}
    </div>
  );
}
