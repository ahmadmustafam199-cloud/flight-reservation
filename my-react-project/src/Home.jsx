
import { useState } from "react";
import {
  Phone,
  Plane,
  ChevronRight,
  AlertCircle,
  RefreshCw,
  Building2,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Star,
  Mail,
  MapPin,
  Clock,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const faqs = [
    {
      question: "How do I book a flight using my Avion points?",
      answer:
        "Call Avion Support Desk with your travel dates, destination, and points details. Our specialists review available redemption options and help you book a flight using your points where the program and airline rules allow. Avion Support Desk is independent and is not affiliated with RBC or Avion Rewards.",
    },
    {
      question: "How do I change or cancel an existing flight reservation?",
      answer:
        "Call Avios Support Desk with your booking reference, passenger names, and travel dates. Our specialists review the airline or supplier rules for your fare and help process the change or cancellation according to those terms. Fees, refunds, and credits depend on the ticket rules and supplier policy.",
    },
    {
      question: "Does my Avion flight booking include travel insurance?",
      answer:
        "Travel insurance is not automatically included with every booking. If you want coverage for trip cancellation, medical emergencies, or baggage, ask an Avios Support Desk specialist when you book so we can review available options for your trip. Always confirm what is and is not covered before you travel.",
    },
    {
      question: "Can I book any airline with Avion points?",
      answer:
        "Avios Support Desk is an independent travel assistance service and is not affiliated with RBC or Avion Rewards. Our specialists can help you explore flight options and points or miles redemption support based on the programs and airlines available for your trip. Call us with your route and dates, and we will review what options apply to you.",
    },
  ];

  const pointsCards = [
    {
      points: "15,000",
      title: "Quick getaways",
      image1:
        "https://images.unsplash.com/photo-1519178614-68673b201f36?auto=format&fit=crop&w=600&q=80",
      image2:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80",
      city1: "Montreal",
      city2: "New York",
    },
    {
      points: "35,000",
      title: "Eastern North America",
      image1:
        "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=600&q=80",
      image2:
        "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=600&q=80",
      city1: "Las Vegas",
      city2: "Miami",
    },
    {
      points: "45,000",
      title: "Vacation destinations",
      image1:
        "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=600&q=80",
      image2:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      city1: "Cancun",
      city2: "Punta Cana",
    },
    {
      points: "55,000",
      title: "Unforgettable escapes",
      image1:
        "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&w=600&q=80",
      image2:
        "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=600&q=80",
      city1: "Honolulu",
      city2: "Toronto",
    },
    {
      points: "65,000",
      title: "Visit Europe",
      image1:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      image2:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      city1: "London",
      city2: "Paris",
    },
    {
      points: "100,000",
      title: "See the world",
      image1:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
      image2:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
      city1: "Tokyo",
      city2: "Bangkok",
    },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Points Redemption Not Working",
      text: "If your points booking screen is confusing, unavailable, or not showing the route you need, call for guidance.",
    },
    {
      icon: Plane,
      title: "New Flight With Points",
      text: "Tell us your destination, dates, and traveler details. A specialist helps you review available flight options.",
    },
    {
      icon: RefreshCw,
      title: "Change Existing Booking",
      text: "Need to change dates, adjust flight details, or understand supplier rules for a points-based booking? Call us.",
    },
    {
      icon: Building2,
      title: "Hotel Add-On Support",
      text: "Most travelers call for flights, but we can also help with a hotel add-on when you need one.",
    },
  ];

  const steps = [
    {
      title: "Call A Specialist",
      text: "Tap the call button and explain whether you need a new booking or existing booking help.",
    },
    {
      title: "Share Points Details",
      text: "Tell us your destination, dates, travelers, and points redemption situation.",
    },
    {
      title: "Review Options",
      text: "A specialist helps check flight options, supplier rules, taxes, and availability.",
    },
    {
      title: "Approve Before Payment",
      text: "Service fees are explained clearly before any payment is taken.",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 font-sans text-slate-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="flex min-w-0 shrink-0 items-center gap-2.5"
          >
            <div className="w-8 shrink-0 sm:w-9 md:w-10">
              <img
                src="https://avionflightreservation.com/images/apple-touch-icon.png?v=4"
                alt="Flight Reservation"
                className="h-auto w-full object-contain"
              />
            </div>

            <span className="truncate text-sm font-bold tracking-tight text-slate-900 sm:text-base">
              Flight Reservation
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 lg:flex xl:gap-6">
            <a
              href="#home"
              className="text-black underline decoration-blue-600 underline-offset-4"
            >
              Home
            </a>

            {[
              ["About Us", "https://avionflightreservation.com/about.html"],
              ["Services", "https://avionflightreservation.com/services.html"],
              ["International Flights", "https://avionflightreservation.com/destinations.html"],
              ["Contact Us", "https://avionflightreservation.com/contact.html"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-black transition hover:text-blue-700 hover:underline hover:decoration-blue-700 hover:underline-offset-4"
              >
                {label}
              </a>
            ))}

            <div className="group relative">
              <a
                href="#"
                className="flex items-center gap-1 text-black transition hover:text-blue-700"
              >
                Legal
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </a>

              <div className="invisible absolute left-0 top-full z-50 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="w-52 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  {[
                    ["Terms & Conditions", "https://avionflightreservation.com/terms.html"],
                    ["Refund Policy", "https://avionflightreservation.com/refund-policy.html"],
                    ["Cancellation Policy", "https://avionflightreservation.com/cancellation-policy.html"],
                    ["Privacy Policy", "https://avionflightreservation.com/privacy-policy.html"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="block px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Call Button */}
          <a
            href="tel:+18662697778"
            className="hidden shrink-0 items-center justify-center rounded-full bg-linear-to-r from-blue-900 via-blue-700 to-blue-500 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300/40 sm:px-5 sm:text-sm lg:flex"
          >
            <Phone className="mr-2 h-4 w-4 fill-current" />
            Call & Speak With an Expert
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenu && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-0.5">
              {[
                ["Home", "https://avionflightreservation.com/index.html"],
                ["About Us", "https://avionflightreservation.com/about.html"],
                ["Services", "https://avionflightreservation.com/services.html"],
                ["International Flights", "https://avionflightreservation.com/destinations.html"],
                ["Contact Us", "https://avionflightreservation.com/contact.html"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </a>
              ))}

              <div className="mt-1 border-t border-slate-100 pt-1">
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Legal
                </p>

                {[
                  ["Terms & Conditions", "https://avionflightreservation.com/terms.html"],
                  ["Refund Policy", "https://avionflightreservation.com/refund-policy.html"],
                  ["Cancellation Policy", "https://avionflightreservation.com/cancellation-policy.html"],
                  ["Privacy Policy", "https://avionflightreservation.com/privacy-policy.html"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <a
                href="tel:+18662697778"
                className="mt-2 flex items-center justify-center rounded-xl bg-linear-to-r from-blue-900 via-blue-700 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-md"
              >
                <Phone className="mr-2 h-4 w-4 fill-current" />
                Call & Speak With an Expert
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="bg-linear-to-b from-blue-100/60 via-blue-50/30 to-white py-6 sm:py-8 lg:py-9"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-[10px] font-extrabold text-blue-800 shadow-sm sm:text-xs">
                  <Plane className="h-3.5 w-3.5 shrink-0" />
                  <span>Independent Points Redemption Flight Help</span>
                </div>

                <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Need Help Booking Flights With{" "}
                  <span className="text-slate-300">Avios</span>{" "}
                  <span className="text-blue-600">Points?</span>
                </h1>

                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Speak with an independent travel specialist for points
                  redemption flights, new flight bookings, existing
                  points-based booking changes, date changes, and flight
                  management support.
                </p>

                <div className="flex w-full max-w-xl flex-col gap-2.5 pt-0.5">
                  <a
                    href="tel:+18662697778"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-950 via-blue-800 to-blue-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300/40 sm:text-base"
                  >
                    <Phone className="h-4 w-4 shrink-0 fill-current" />
                    <span>Call & Speak With a Travel Expert</span>
                  </a>

                  <a
                    href="mailto:sales@avionflightreservation.com"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-linear-to-r from-white via-blue-50 to-blue-100 px-4 py-3 text-center text-sm font-bold text-blue-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:text-base"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    <span>Email Booking Team</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                    alt="Airplane wing over clouds"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent" />
                </div>

                <div className="space-y-2.5 p-3 sm:p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold tracking-tight text-slate-900">
                      Points Flight Assistance
                    </h3>

                    <div className="inline-flex w-fit items-center gap-1 rounded-full border border-blue-200/60 bg-blue-50 px-2 py-1 text-[9px] font-semibold text-blue-700">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
                      Expert Assistance Available
                    </div>
                  </div>

                  <div className="relative grid grid-cols-2 gap-2">
                    {[
                      ["NEED", "Redeem"],
                      ["TRIP", "Flight"],
                    ].map(([top, bottom]) => (
                      <div
                        key={top}
                        className="rounded-xl border border-blue-100/80 bg-linear-to-b from-blue-50/60 to-blue-50/20 p-2.5"
                      >
                        <span className="block text-[9px] font-bold uppercase pl-3 tracking-wider text-slate-400">
                          {top}
                        </span>
                        <span className="mt-0.5 block text-sm font-bold pl-3 text-slate-900">
                          {bottom}
                        </span>
                      </div>
                    ))}

                    <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2 border-white bg-blue-600 p-2 text-white shadow-md">
                      <Plane className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      ["POINTS", "Review"],
                      ["FLIGHT", "Options"],
                      ["BOOKING", "Manage"],
                    ].map(([top, bottom]) => (
                      <div
                        key={top}
                        className="rounded-lg border border-slate-200/80 p-2 text-center transition hover:border-blue-200 hover:bg-blue-50/40"
                      >
                        <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                          {top}
                        </span>
                        <span className="mt-0.5 block text-[10px] font-extrabold text-slate-900 sm:text-[11px]">
                          {bottom}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE BAR */}
      <section className="bg-linear-to-r from-blue-950 via-blue-800 to-blue-600 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/15 md:grid-cols-4 md:divide-y-0">
            {[
              ["Redeem Points", "Use points for a new flight booking"],
              ["Change Dates", "Manage an existing points flight"],
              ["Find Flights", "Check available flight options"],
              ["Hotel Add-On", "Add a hotel when needed"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="group px-3 py-3 text-center transition-all duration-300 hover:bg-white/10 sm:px-4 sm:py-3.5"
              >
                <div className="text-xs font-semibold text-white sm:text-sm">
                  {title}
                </div>
                <div className="mt-0.5 text-[9px] leading-4 text-blue-100/70 sm:text-[11px] sm:leading-relaxed">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POINTS BREAKDOWN */}
      <section
        id="destinations"
        className="bg-white py-7 sm:py-9 lg:py-10"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 max-w-3xl text-center sm:mb-7">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-600 sm:text-sm">
              POINTS VALUE GUIDELINES
            </span>

            <h2 className="mt-1.5 font-serif text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Understand Your Points Before You Book
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              Points value can vary by route, travel date, seat availability,
              taxes, carrier charges, and supplier rules. A specialist can
              help you compare practical booking options before you proceed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {pointsCards.map((card) => (
              <div
                key={card.points}
                className="rounded-2xl border border-slate-200 bg-linear-to-br from-white via-blue-50/20 to-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4"
              >
                <div className="text-lg font-extrabold text-blue-900">
                  {card.points}{" "}
                  <span className="text-sm font-extrabold">points</span>
                </div>

                <div className="mt-0.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-black sm:text-sm">
                    {card.title}
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                </div>

                <span className="mt-0.5 block text-[10px] font-bold text-slate-500 sm:text-xs">
                  Potential destinations
                </span>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[1, 2].map((item) => {
                    const image = item === 1 ? card.image1 : card.image2;
                    const city = item === 1 ? card.city1 : card.city2;

                    return (
                      <div
                        key={city}
                        className="group relative h-23 overflow-hidden rounded-lg sm:h-27"
                      >
                        <img
                          src={image}
                          alt={city}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-1.5 left-2 text-[11px] font-bold text-white drop-shadow sm:text-xs">
                          {city}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-6">
            <div className="border-b border-slate-200 bg-slate-100 p-3.5 sm:p-4">
              <h3 className="font-serif text-base font-extrabold text-slate-800 sm:text-xl">
                Standard points value examples
              </h3>

              <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                These are general educational examples only. Actual
                redemption value is confirmed during the booking process.
              </p>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {[
                ["Short-haul flight routes", "Lower points range"],
                ["Popular city-to-city routes", "Moderate points range"],
                ["Peak season / urgent flights", "Higher points range"],
                ["First Class Service", "Often better value"],
              ].map(([left, right]) => (
                <div
                  key={left}
                  className="flex flex-col gap-0.5 px-4 py-2.5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5"
                >
                  <span className="font-bold text-slate-700">{left}</span>
                  <span className="font-extrabold text-blue-900">{right}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2.5 rounded-xl bg-cyan-50 p-2.5 text-[10px] font-medium leading-5 text-cyan-700 sm:text-[11px]">
            Tip: Flexible travel dates usually make it easier to find better
            points redemption flight options. Call before your preferred seats
            disappear.
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section
        id="services"
        className="w-full bg-linear-to-r from-white via-blue-50 to-sky-100 py-7 sm:py-9"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 max-w-3xl text-center sm:mb-7">
            <span className="inline-flex items-center rounded-full bg-linear-to-r from-white via-blue-50 to-sky-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-xs">
              Problem Solving
            </span>

            <h2 className="mt-1.5 font-serif text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Most Calls Are About Points Flight Problems
            </h2>

            <p className="mx-auto mt-1.5 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              Travelers usually call because they are stuck redeeming points,
              cannot find flight availability, or need help managing an
              existing booking made with points.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:gap-4">
            {problems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGE BOOKING */}
      <section
        id="about"
        className="w-full bg-linear-to-r from-white via-blue-50 to-sky-100 py-6 sm:py-8"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl lg:grid-cols-12">
            <div className="relative min-h-48 sm:min-h-56 lg:col-span-5 lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80"
                alt="Customer service terminal"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent lg:bg-linear-to-r" />
            </div>

            <div className="flex flex-col justify-center space-y-3 p-5 sm:p-6 lg:col-span-7 lg:p-8">
              <div>
                <span className="rounded bg-slate-800 px-2.5 py-1 text-[9px] font-bold tracking-wider text-slate-300">
                  MANAGE BOOKING
                </span>

                <h2 className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl">
                  Already Booked With Points?
                </h2>

                <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                  Many travelers need help after the flight is booked — date
                  changes, route updates, hotel add-ons, supplier rules,
                  taxes, or confusion about what can be changed.
                </p>
              </div>

              <div className="space-y-2 pt-0.5">
                {[
                  "Date change or schedule adjustment support",
                  "Flight booking management guidance",
                  "Taxes, charges, and supplier rule explanation",
                  "Hotel add-on help when needed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/90 p-2.5 text-xs text-slate-200 sm:text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full bg-linear-to-r from-white via-blue-50 to-sky-100 py-7 sm:py-9">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 max-w-2xl text-center sm:mb-7">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 sm:text-xs">
              HOW IT WORKS
            </span>

            <h2 className="mt-2 font-serif text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
              Simple Points Flight Help In 4 Steps
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              The goal is simple: call, explain your points flight need,
              review options, and approve any service charge before payment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 via-white to-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-md">
                  {index + 1}
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE FEE */}
      <section className="w-full bg-linear-to-br from-white via-blue-50/50 to-sky-100/70 py-7 sm:py-9">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-100 bg-white/95 p-5 text-center shadow-lg shadow-blue-100/40 backdrop-blur-sm sm:p-6 lg:p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-linear-to-r from-blue-50 to-sky-100 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-blue-700 sm:text-xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              SERVICE FEE TRANSPARENCY
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              No Hidden Payment Step
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              Our initial call is toll-free. If you choose to proceed with
              points flight assistance, new booking help, booking management,
              date change guidance, or hotel add-on support, a service fee may
              apply.
            </p>

            <div className="mx-auto mt-4 max-w-2xl">
              <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-linear-to-r from-blue-50 via-sky-50 to-white p-3.5 text-left shadow-sm sm:items-center sm:p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>

                <p className="text-xs font-medium leading-5 text-slate-700 sm:text-sm sm:leading-6">
                  Your agent will explain all charges clearly before payment
                  is taken. You decide whether to continue.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-400 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Clear pricing</span>
              <span className="text-slate-300">•</span>
              <span>No pressure</span>
              <span className="text-slate-300">•</span>
              <span>Your choice</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-t border-slate-200 bg-linear-to-br from-white via-sky-50 to-blue-100 py-7 sm:py-9">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-linear-to-r from-blue-50 via-sky-50 to-white px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              FAQ
            </span>

            <h2 className="mt-1.5 font-serif text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Questions Before You Call?
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-blue-100 bg-white/95 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-xs font-bold text-slate-900 focus:outline-none sm:px-5 sm:text-sm"
                  >
                    <span className="pr-2">{faq.question}</span>

                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 shrink-0 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pb-3.5 pt-2.5 text-[11px] leading-5 text-slate-500 sm:px-5 sm:text-sm sm:leading-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="w-full border-t border-slate-200 bg-linear-to-br from-white via-sky-50 to-blue-100 py-7 sm:py-9">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 text-center sm:mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-linear-to-r from-blue-50 via-sky-50 to-white px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              REAL TRAVELER REVIEWS
            </span>

            <h2 className="mt-1.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What Customers Say After Their Call
            </h2>

            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}

              <span className="ml-1.5 text-[10px] font-semibold text-slate-700 sm:text-xs">
                4.9 / 5 from verified callers
              </span>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3.5 md:grid-cols-2">
            {[
              {
                initials: "SM",
                name: "Sarah M.",
                location: "Toronto, ON",
                text: "The specialist walked me through every points option for our Tokyo trip. Saved hours of confusion compared to clicking around the airline portal myself.",
              },
              {
                initials: "JR",
                name: "James R.",
                location: "Vancouver, BC",
                text: "Needed to change dates on an existing reward booking and didn't want to fight with phone trees. Sorted in one call — clear answers, no pressure.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="group relative rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >
                <span className="absolute right-5 top-4 select-none font-serif text-4xl leading-none text-blue-100">
                  “
                </span>

                <div className="mb-2.5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="pr-5 text-xs leading-6 text-slate-600 sm:text-sm">
                  {review.text}
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-sky-500 text-xs font-bold text-white shadow-sm">
                    {review.initials}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 sm:text-[11px]">
                      {review.location}
                    </p>
                  </div>

                  <span className="ml-auto shrink-0 rounded-full bg-blue-50 px-2 py-1 text-[9px] font-medium text-blue-600 sm:text-[10px]">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full p-1 text-slate-300 transition hover:text-blue-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>

            <button
              type="button"
              className="rounded-full p-1 text-slate-300 transition hover:text-blue-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative w-full overflow-hidden bg-linear-to-br from-[#031B4E] via-blue-800 to-sky-600 px-4 py-8 text-center text-white sm:py-10"
      >
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ready To Redeem Points For A Flight?
          </h2>

          <p className="mx-auto mt-1.5 max-w-2xl text-xs leading-5 text-blue-100 sm:text-sm">
            Call now for points redemption flight help, new booking support,
            or help managing an existing points-based booking.
          </p>

          <div className="mt-4">
            <a
              href="tel:+18662697778"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#031B4E] shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl sm:w-auto sm:max-w-none sm:px-7"
            >
              <Phone className="h-4 w-4 fill-current" />
              <span>+1 866 269 7778</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-blue-900/40 bg-[#020F2E] text-xs text-slate-400">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Top */}
          <div className="flex flex-col gap-3 border-b border-slate-800/80 pb-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-white/5">
                <img
                  src="https://avionflightreservation.com/images/apple-touch-icon.png?v=4"
                  alt="Flight Reservation"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <div>
                <div className="text-sm font-bold tracking-tight text-white sm:text-base">
                  Flight Reservation
                </div>
                <div className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                  Professional Flight Booking Assistance
                </div>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-medium text-slate-400 sm:gap-x-5 sm:text-[11px]">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>
              <a href="#about" className="transition hover:text-white">
                About Us
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#destinations" className="transition hover:text-white">
                International Flights
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact Us
              </a>
              <a
                href="/terms"
                className="flex items-center gap-1 transition hover:text-white"
              >
                Legal
                <ChevronDown className="h-3 w-3" />
              </a>
            </nav>
          </div>

          {/* Contact Cards */}
          <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2">
            {/* Address */}
            <div className="rounded-xl border border-blue-900/40 bg-linear-to-br from-[#061A3D] to-[#04132F] p-3.5 transition-all duration-300 hover:border-blue-500/40">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>

                <div className="min-w-0">
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-300/80">
                    Mailing Address
                  </div>

                  <div className="mt-0.5 text-[10px] font-medium leading-5 text-slate-200 sm:text-[11px]">
                    100 King Street West, Suite 5600
                    <br />
                    Toronto, ON M5X 1C9, Canada
                  </div>
                </div>
              </div>

              <div className="mt-2.5 flex items-start gap-3 border-t border-slate-800/70 pt-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>

                <div className="min-w-0">
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-300/80">
                    Business Email
                  </div>

                  <a
                    href="mailto:sales@avionflightreservation.com"
                    className="mt-0.5 block break-all text-[10px] font-medium text-slate-200 transition hover:text-blue-300 sm:text-[11px]"
                  >
                    sales@avionflightreservation.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-blue-900/40 bg-linear-to-br from-[#061A3D] to-[#04132F] p-3.5 transition-all duration-300 hover:border-blue-500/40">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-300/80">
                    Phone Support
                  </div>

                  <a
                    href="tel:+18662697778"
                    className="mt-0.5 block text-sm font-bold tracking-wide text-white transition hover:text-blue-300"
                  >
                    +1 866 269 7778
                  </a>
                </div>
              </div>

              <div className="mt-2.5 flex items-start gap-3 border-t border-slate-800/70 pt-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10">
                  <Clock className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-300/80">
                    Support Hours
                  </div>

                  <div className="mt-0.5 text-[10px] font-medium leading-5 text-slate-200 sm:text-[11px]">
                    24/7 Phone Support - 365 Days a Year
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-3 rounded-xl border border-slate-800/70 bg-[#03153B]/70 px-3.5 py-2.5 text-[9px] leading-5 text-slate-500 sm:text-[10px] sm:leading-relaxed">
            <span className="font-semibold text-slate-300">Disclaimer:</span>{" "}
            Avion Flight Reservation is an independent travel booking
            assistance service. We are not affiliated with, authorized by, or
            endorsed by Royal Bank of Canada (RBC), Avion Rewards, or any other
            airline or bank reward program. All trademarks are the property of
            their respective owners.
          </div>

          {/* Bottom */}
          <div className="mt-4 flex flex-col items-center justify-between gap-2.5 border-t border-slate-800/70 pt-3 text-center sm:flex-row sm:text-left">
            <p className="text-[9px] text-slate-600 sm:text-[10px]">
              © {new Date().getFullYear()} Flight Reservation. All rights
              reserved.
            </p>

            <div className="flex items-center gap-2 text-[9px] text-slate-600 sm:text-[10px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" />
              <span>Professional Flight Booking Assistance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

