
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ReplikatorLandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-6 grid gap-8">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projekt Replikator
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Der Replikator ist eine Vision: Ein Gerät, das Nahrung, Werkzeuge und materielle Güter auf molekularer Ebene erschaffen kann. Dezentral. Frei. Für alle. Das Ende des Mangels beginnt hier.
      </motion.p>

      <div className="bg-white text-black max-w-2xl mx-auto p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold">Mach mit</h2>
        <p>Trag dich ein, um beim Aufbau des Projekts dabei zu sein:</p>
        <Input
          placeholder="Deine E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="w-full mt-2">Ich will mitgestalten</Button>
      </div>

      <motion.div
        className="grid gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Section
          title="Warum ein Replikator?"
          content="Weil Besitz, Hunger und Mangel nicht mehr notwendig sind. Die Technologie ist reif, wir müssen sie nur richtig kombinieren."
        />
        <Section
          title="Was brauchen wir?"
          content="Biotechnologen, Entwickler, Hacker, Ingenieure, Kreative, Idealisten. Und dich."
        />
        <Section
          title="Was ist der erste Schritt?"
          content="Ein einfacher Prototyp, der essbare Biomasse herstellen kann. Mit KI, Solarstrom und modularer Steuerung."
        />
      </motion.div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
