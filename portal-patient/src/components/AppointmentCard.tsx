type Appointment = {
  medecin: string;
  specialite: string;
  date: string;
  lieu: string;
  statut: string;
};

export default function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const isPast = appointment.statut === "passé";
  return (
    <div
  className={`rounded-lg border p-4 mb-3 shadow-sm flex flex-col gap-1 bg-white ${
        isPast ? "opacity-60" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">{appointment.medecin}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${isPast ? "bg-gray-300 text-gray-700" : "bg-blue-100 text-blue-700"}`}>
          {appointment.statut}
        </span>
      </div>
      <div className="text-sm text-gray-500">{appointment.specialite}</div>
      <div className="text-sm">{appointment.date} — {appointment.lieu}</div>
    </div>
  );
}
