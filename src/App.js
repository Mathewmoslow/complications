import React, { useState, useEffect } from 'react';
import { ArrowLeft, Home, Heart, AlertCircle, Activity, Baby, Stethoscope } from 'lucide-react';

const PregnancyJourney = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const [currentPath, setCurrentPath] = useState('start');
  const [history, setHistory] = useState(['start']);
  const [journeyData, setJourneyData] = useState({});

  const goToPath = (pathId, data = {}) => {
    setCurrentPath(pathId);
    setHistory([...history, pathId]);
    setJourneyData({ ...journeyData, ...data });
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentPath(newHistory[newHistory.length - 1]);
    },
    
    "surgical-risks": {
      title: "D&C Procedure Risks",
      icon: <AlertCircle size={48} />,
      description: "While D&C is generally very safe, it's important to understand potential risks:",
      risks: [
        {
          risk: "Infection",
          rate: "Less than 1%",
          signs: "Fever, foul discharge, severe pain"
        },
        {
          risk: "Heavy bleeding",
          rate: "Rare (1-2%)",
          signs: "Soaking >2 pads per hour"
        },
        {
          risk: "Uterine perforation",
          rate: "Very rare (<0.5%)",
          signs: "Severe pain, bleeding"
        },
        {
          risk: "Asherman syndrome",
          rate: "Rare with first D&C",
          signs: "Light/absent periods later"
        }
      ],
      benefits: {
        title: "Benefits of D&C:",
        items: [
          "✅ Quick resolution (same day)",
          "✅ Complete tissue removal",
          "✅ Less bleeding overall",
          "✅ Tissue available for testing",
          "✅ Closure and moving forward"
        ]
      },
      choices: [
        {
          text: "I understand, proceed",
          path: "surgical-path",
          color: "primary"
        },
        {
          text: "Consider other options",
          path: "treatment-options",
          color: "info"
        }
      ]
    },
    
    "pain-evaluation": {
      title: "Evaluating Abdominal Pain",
      icon: <AlertCircle size={48} />,
      description: "Abdominal pain in pregnancy needs careful evaluation.",
      types: [
        {
          type: "Normal cramping",
          description: "Mild, period-like",
          action: "Monitor, rest"
        },
        {
          type: "Round ligament pain",
          description: "Sharp, sides, with movement",
          action: "Normal, change positions"
        },
        {
          type: "Concerning pain",
          description: "Severe, persistent, with bleeding",
          action: "Seek immediate care"
        }
      ],
      warning: "Severe pain always needs immediate evaluation",
      choices: [
        {
          text: "Mild cramping only",
          path: "normal-cramping",
          color: "success"
        },
        {
          text: "Severe pain",
          path: "emergency-care",
          color: "danger"
        },
        {
          text: "Pain with bleeding",
          path: "bleeding",
          color: "warning"
        }
      ]
    },
    
    "hyperemesis": {
      title: "Severe Morning Sickness",
      icon: <Activity size={48} />,
      description: "Hyperemesis gravidarum is severe nausea and vomiting in pregnancy.",
      symptoms: [
        "🤮 Vomiting multiple times daily",
        "💧 Unable to keep fluids down",
        "⚖️ Weight loss (>5% body weight)",
        "💫 Dizziness or fainting",
        "🚱 Dark urine (dehydration)"
      ],
      info: "This affects 0.5-2% of pregnancies and requires medical treatment",
      choices: [
        {
          text: "I need help now",
          path: "hyperemesis-treatment",
          color: "danger"
        },
        {
          text: "Learn about treatment",
          path: "hyperemesis-management",
          color: "primary"
        },
        {
          text: "Other symptoms",
          path: "symptoms",
          color: "info"
        }
      ]
    },
    
    "infection-concern": {
      title: "Infection During Pregnancy",
      icon: <AlertCircle size={48} />,
      description: "Fever or signs of infection during pregnancy need immediate attention.",
      warning: "⚠️ Fever over 100.4°F (38°C) requires immediate medical care",
      signs: [
        "🌡️ Fever or chills",
        "🤒 Body aches",
        "🚱 Burning with urination",
        "💧 Unusual discharge",
        "😷 Respiratory symptoms"
      ],
      risks: {
        title: "Why immediate care is needed:",
        items: [
          "🦠 Some infections can affect baby",
          "🤰 Pregnancy changes immune system",
          "💊 Safe treatments are available",
          "⏰ Early treatment is best"
        ]
      },
      choices: [
        {
          text: "Seek immediate care",
          path: "emergency-care",
          color: "danger"
        },
        {
          text: "Learn about prevention",
          path: "infection-prevention",
          color: "info"
        }
      ]
    },
    
    "emergency-care": {
      title: "Seeking Emergency Care",
      icon: <AlertCircle size={48} />,
      description: "You need immediate medical attention. Here's what to do:",
      immediate: [
        "🚨 Call 911 or go to ER now",
        "📞 Or call your OB immediately",
        "🏥 Don't wait or drive yourself if severe",
        "📋 Bring pregnancy records if possible"
      ],
      whatToBring: {
        title: "If possible, bring:",
        items: [
          "📱 List of medications",
          "🩸 Pad count (if bleeding)",
          "📅 Last menstrual period date",
          "🏥 Insurance information",
          "👥 Support person"
        ]
      },
      choices: [
        {
          text: "What happens at ER",
          path: "hospital-care",
          color: "primary"
        },
        {
          text: "Start over",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "medical-home-care": {
      title: "Managing Medical Miscarriage at Home",
      icon: <Home size={48} />,
      description: "Here's how to manage misoprostol treatment at home safely:",
      preparation: {
        title: "Before taking medication:",
        items: [
          "🏠 Be in comfortable place",
          "👥 Have support person present",
          "🩸 Stock up on pads",
          "💊 Have pain medication ready",
          "📞 Emergency numbers handy"
        ]
      },
      during: {
        title: "During the process:",
        items: [
          "⏰ Cramping starts 2-6 hours",
          "🩸 Heavy bleeding expected",
          "🚽 Stay near bathroom",
          "💧 Stay hydrated",
          "🛏️ Rest as needed"
        ]
      },
      emergency: {
        title: "Call doctor if:",
        items: [
          "🩸 Soaking >2 pads/hour for 2 hours",
          "🌡️ Fever over 100.4°F",
          "😵 Severe dizziness",
          "💢 Unbearable pain",
          "🤮 Can't keep fluids down"
        ]
      },
      choices: [
        {
          text: "After medication complete",
          path: "post-medical-recovery",
          color: "success"
        },
        {
          text: "If not working",
          path: "medical-second-dose",
          color: "warning"
        }
      ]
    },
    
    "medical-second-dose": {
      title: "When First Dose Doesn't Work",
      icon: <Activity size={48} />,
      description: "Sometimes a second dose of medication is needed.",
      info: "About 10-20% of people need a second dose",
      options: [
        {
          option: "Second dose",
          description: "Another round of misoprostol",
          success: "Usually effective"
        },
        {
          option: "Switch to D&C",
          description: "Surgical completion",
          success: "Definitive treatment"
        },
        {
          option: "Continue waiting",
          description: "If partial passage",
          success: "May complete naturally"
        }
      ],
      choices: [
        {
          text: "Discuss with doctor",
          path: "questions-for-doctor",
          color: "primary"
        },
        {
          text: "Consider D&C",
          path: "surgical-path",
          color: "info"
        }
      ]
    },
    
    "expectant-warnings": {
      title: "Warning Signs During Expectant Management",
      icon: <AlertCircle size={48} />,
      description: "While waiting for natural miscarriage, watch for these warning signs:",
      immediate: {
        title: "Seek immediate care for:",
        items: [
          "🩸 Hemorrhaging (soaking 2+ pads/hour)",
          "🌡️ Fever over 100.4°F (38°C)",
          "💢 Severe pain not relieved by medication",
          "😵 Fainting or severe dizziness",
          "🦠 Foul-smelling discharge"
        ]
      },
      normal: {
        title: "Normal experiences:",
        items: [
          "🩸 Bleeding like heavy period",
          "😣 Cramping (manageable with meds)",
          "🩺 Passing clots or tissue",
          "😢 Emotional ups and downs"
        ]
      },
      choices: [
        {
          text: "I have warning signs",
          path: "emergency-care",
          color: "danger"
        },
        {
          text: "Continue monitoring",
          path: "expectant-monitoring",
          color: "primary"
        }
      ]
    },
    
    "expectant-no-progress": {
      title: "No Progress After Waiting",
      icon: <Activity size={48} />,
      description: "If nothing has happened after 2+ weeks of waiting:",
      why: {
        title: "This can happen because:",
        items: [
          "⏰ Body hasn't recognized loss",
          "🤷‍♀️ Individual variation",
          "📊 Happens in 20-30% of cases",
          "✅ Not harmful to wait longer"
        ]
      },
      options: {
        title: "Your options now:",
        items: [
          "⏳ Continue waiting (if stable)",
          "💊 Try medication",
          "🏥 Schedule D&C",
          "🩺 Repeat ultrasound"
        ]
      },
      choices: [
        {
          text: "Switch to medication",
          path: "medical-path",
          color: "warning"
        },
        {
          text: "Consider D&C",
          path: "surgical-path",
          color: "primary"
        },
        {
          text: "Keep waiting",
          path: "expectant-continue",
          color: "info"
        }
      ]
    },
    
    "post-medical-recovery": {
      title: "Recovery After Medical Management",
      icon: <Heart size={48} />,
      description: "Your medical miscarriage is complete. Here's what to expect:",
      physical: {
        title: "Physical recovery:",
        items: [
          "🩸 Light bleeding for 1-2 weeks",
          "📉 Cramping decreases daily",
          "🔄 Period returns in 4-6 weeks",
          "✅ hCG levels drop to zero"
        ]
      },
      followUp: {
        title: "Follow-up care:",
        items: [
          "📅 Check-up in 1-2 weeks",
          "🩸 May need blood test",
          "📱 Ultrasound if needed",
          "💊 Iron if anemic"
        ]
      },
      choices: [
        {
          text: "Emotional recovery",
          path: "emotional-support",
          color: "primary"
        },
        {
          text: "When to try again",
          path: "future-pregnancy",
          color: "info"
        },
        {
          text: "Start over",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "when-seek-help": {
      title: "When to Seek Professional Help",
      icon: <AlertCircle size={48} />,
      description: "It's important to recognize when you need additional support after pregnancy loss.",
      warning: "Seek immediate help if experiencing thoughts of self-harm",
      normalGrief: {
        title: "Normal grief includes:",
        items: [
          "😢 Crying and sadness",
          "😤 Anger and frustration",
          "😔 Guilt feelings",
          "💭 Thinking about the loss",
          "📉 Ups and downs"
        ]
      },
      seekHelp: {
        title: "Seek help if you have:",
        items: [
          "🚨 Thoughts of harming yourself",
          "😰 Persistent anxiety/panic",
          "🛏️ Unable to function daily",
          "🚫 No improvement after 2-3 months",
          "💊 Substance use to cope"
        ]
      },
      choices: [
        {
          text: "Find support resources",
          path: "emotional-support",
          color: "primary"
        },
        {
          text: "Back to recovery",
          path: "post-surgical-recovery",
          color: "info"
        }
      ]
    },
    
    "resolution-positive": {
      title: "Positive Resolution",
      icon: <Heart size={48} />,
      description: "Great news! Your bleeding has stopped and your pregnancy appears to be continuing.",
      details: [
        "✅ Bleeding has resolved",
        "💓 Pregnancy continuing",
        "📱 Continue regular prenatal care",
        "🎯 Stay alert for warning signs"
      ],
      nextSteps: {
        title: "Moving forward:",
        items: [
          "📅 Keep all prenatal appointments",
          "💊 Continue prenatal vitamins",
          "🏃‍♀️ Gentle exercise as approved",
          "😌 Try to reduce stress",
          "📞 Call if symptoms return"
        ]
      },
      choices: [
        {
          text: "Learn about risk reduction",
          path: "risk-reduction",
          color: "success"
        },
        {
          text: "Start over",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "threatened-outcomes": {
      title: "Possible Outcomes of Threatened Miscarriage",
      icon: <Activity size={48} />,
      description: "A threatened miscarriage can resolve in different ways:",
      outcomes: [
        {
          title: "Continuation (50-70%)",
          description: "Pregnancy continues normally",
          items: ["Bleeding stops", "Baby develops normally", "No long-term effects"]
        },
        {
          title: "Miscarriage (30-50%)",
          description: "Pregnancy loss occurs",
          items: ["Bleeding increases", "Cramping develops", "Tissue passes"]
        }
      ],
      factors: {
        title: "Factors affecting outcome:",
        items: [
          "💓 Presence of fetal heartbeat",
          "🩸 Amount of bleeding",
          "📊 hCG levels trending",
          "📅 Gestational age",
          "🧬 Underlying cause"
        ]
      },
      choices: [
        {
          text: "If bleeding continues",
          path: "active-miscarriage",
          color: "warning"
        },
        {
          text: "If bleeding stops",
          path: "resolution-positive",
          color: "success"
        },
        {
          text: "Back to management",
          path: "threatened-management",
          color: "primary"
        }
      ]
    },
    
    "risk-reduction": {
      title: "Reducing Miscarriage Risk",
      icon: <Heart size={48} />,
      description: "While not all miscarriages can be prevented, you can optimize your health:",
      categories: [
        {
          title: "Before Pregnancy",
          items: [
            "💊 Folic acid 400-800mcg daily",
            "🏋️‍♀️ Healthy weight",
            "🚭 Stop smoking",
            "🍷 Limit alcohol",
            "🩺 Manage chronic conditions"
          ]
        },
        {
          title: "During Pregnancy",
          items: [
            "🥗 Balanced nutrition",
            "💧 Stay hydrated",
            "😴 Adequate rest",
            "🧘‍♀️ Stress management",
            "📅 Regular prenatal care"
          ]
        },
        {
          title: "Avoid",
          items: [
            "🚬 All tobacco products",
            "🍺 Alcohol and drugs",
            "☕ Excess caffeine (>200mg)",
            "🧀 Unpasteurized foods",
            "🐱 Cat litter (toxoplasmosis)"
          ]
        }
      ],
      choices: [
        {
          text: "Learn more about risk factors",
          path: "risk-factors",
          color: "info"
        },
        {
          text: "Start over",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "post-bleeding": {
      title: "After Bleeding Has Stopped",
      icon: <Stethoscope size={48} />,
      description: "Your bleeding has stopped, but you're still concerned. This is completely normal.",
      info: "Many pregnancies continue successfully after early bleeding",
      whatNow: {
        title: "What to do now:",
        items: [
          "📞 Follow up with your provider",
          "📱 Ultrasound may be recommended",
          "🩸 Monitor for return of bleeding",
          "💊 Continue prenatal vitamins",
          "😌 Try to stay calm"
        ]
      },
      watchFor: {
        title: "Call your provider if:",
        items: [
          "🩸 Bleeding returns",
          "😣 Cramping develops",
          "🤒 Fever occurs",
          "💫 Severe symptoms"
        ]
      },
      choices: [
        {
          text: "Understanding what happened",
          path: "threatened-miscarriage",
          color: "info"
        },
        {
          text: "Future precautions",
          path: "risk-reduction",
          color: "primary"
        },
        {
          text: "Start over",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "hospital-care": {
      title: "What Happens at the Hospital",
      icon: <Activity size={48} />,
      description: "Understanding hospital care during miscarriage can help reduce anxiety.",
      timeline: [
        {
          phase: "Arrival & Triage",
          items: [
            "📋 Registration and medical history",
            "🩺 Vital signs check",
            "❓ Description of symptoms",
            "🏥 Triage priority assessment"
          ]
        },
        {
          phase: "Evaluation",
          items: [
            "🩸 Blood tests (hCG, blood type)",
            "📱 Ultrasound examination",
            "🔍 Physical examination",
            "💬 Discussion with doctor"
          ]
        },
        {
          phase: "Treatment",
          items: [
            "💊 Pain management",
            "🩹 Treatment plan discussion",
            "📋 Consent for procedures",
            "🤝 Emotional support"
          ]
        }
      ],
      choices: [
        {
          text: "Treatment options explained",
          path: "treatment-options",
          color: "primary"
        },
        {
          text: "What to ask the doctor",
          path: "questions-for-doctor",
          color: "info"
        }
      ]
    },
    
    "questions-for-doctor": {
      title: "Questions to Ask Your Doctor",
      icon: <Stethoscope size={48} />,
      description: "Important questions during miscarriage care:",
      questions: [
        {
          category: "Immediate",
          items: [
            "❓ What type of miscarriage is this?",
            "🏥 What are my treatment options?",
            "⏰ How long will each option take?",
            "💊 What pain management is available?"
          ]
        },
        {
          category: "Recovery",
          items: [
            "📅 What's the recovery timeline?",
            "🚨 What symptoms need immediate care?",
            "💼 When can I return to work?",
            "🏃‍♀️ When can I resume activities?"
          ]
        },
        {
          category: "Future",
          items: [
            "🤰 When can we try again?",
            "🔬 Do I need any testing?",
            "📊 What are my chances next time?",
            "💊 Should I take any supplements?"
          ]
        }
      ],
      choices: [
        {
          text: "Back to treatment options",
          path: "treatment-options",
          color: "primary"
        },
        {
          text: "Recovery information",
          path: "post-surgical-recovery",
          color: "info"
        }
      ]
    },
    
    "expectant-path": {
      title: "Expectant Management Journey",
      icon: <Heart size={48} />,
      description: "You've chosen to wait for natural passage. Here's what to expect:",
      timeline: {
        title: "Typical timeline:",
        items: [
          "📅 Can take 1-4 weeks",
          "🩸 Bleeding may come and go",
          "😣 Cramping increases when passing tissue",
          "📱 Regular monitoring needed"
        ]
      },
      atHome: {
        title: "Managing at home:",
        items: [
          "🩸 Use pads, not tampons",
          "💊 Pain relief as advised",
          "🌡️ Monitor temperature",
          "💧 Stay hydrated",
          "📞 Know when to call"
        ]
      },
      choices: [
        {
          text: "Warning signs to watch",
          path: "expectant-warnings",
          color: "warning"
        },
        {
          text: "If nothing happens after 2 weeks",
          path: "expectant-no-progress",
          color: "info"
        },
        {
          text: "Emotional support",
          path: "emotional-support",
          color: "primary"
        }
      ]
    },
    
    "medical-path": {
      title: "Medical Management with Medication",
      icon: <Activity size={48} />,
      description: "You've chosen medication (misoprostol) to help complete the miscarriage.",
      process: {
        title: "What happens:",
        items: [
          "💊 Medication given (pills or vaginal)",
          "⏰ Cramping starts 2-6 hours later",
          "🩸 Heavy bleeding as tissue passes",
          "📉 Bleeding decreases after passage",
          "✅ 80-90% effective first dose"
        ]
      },
      expect: {
        title: "What to expect:",
        items: [
          "😣 Strong cramping (like labor)",
          "🩸 Heavy bleeding for 4-6 hours",
          "🤒 Possible fever/chills",
          "🤢 Nausea or diarrhea",
          "💊 Pain medication helps"
        ]
      },
      choices: [
        {
          text: "Managing at home",
          path: "medical-home-care",
          color: "primary"
        },
        {
          text: "If first dose doesn't work",
          path: "medical-second-dose",
          color: "warning"
        },
        {
          text: "Recovery after",
          path: "post-surgical-recovery",
          color: "success"
        }
      ]
    }
  };

  const restart = () => {
    setCurrentPath('start');
    setHistory(['start']);
    setJourneyData({});
  };

  const paths = {
    start: {
      title: "Your Pregnancy Journey Begins",
      icon: <Baby size={48} />,
      description: "You've just discovered you're pregnant. This interactive guide will help you understand different paths and potential complications during pregnancy.",
      choices: [
        {
          text: "I'm experiencing bleeding",
          path: "bleeding",
          color: "danger"
        },
        {
          text: "I'm having other symptoms",
          path: "symptoms",
          color: "warning"
        },
        {
          text: "I want to learn about miscarriage types",
          path: "miscarriage-types",
          color: "info"
        },
        {
          text: "I want to understand risk factors",
          path: "risk-factors",
          color: "primary"
        }
      ]
    },
    
    bleeding: {
      title: "Experiencing Bleeding",
      icon: <AlertCircle size={48} />,
      description: "Vaginal bleeding during pregnancy can have different meanings depending on various factors.",
      info: "About 20-30% of women experience some bleeding in early pregnancy.",
      choices: [
        {
          text: "Light spotting, no pain",
          path: "threatened-miscarriage",
          color: "warning"
        },
        {
          text: "Heavy bleeding with cramping",
          path: "active-miscarriage",
          color: "danger"
        },
        {
          text: "Bleeding stopped, but concerned",
          path: "post-bleeding",
          color: "info"
        }
      ]
    },
    
    "threatened-miscarriage": {
      title: "Threatened Miscarriage",
      icon: <Heart size={48} />,
      description: "Light bleeding with a closed cervix. The pregnancy may continue normally.",
      details: [
        "💧 Light spotting or bleeding",
        "✅ Cervix remains closed",
        "📊 50-70% of pregnancies continue successfully",
        "🛏️ Rest and monitoring recommended"
      ],
      choices: [
        {
          text: "What should I do now?",
          path: "threatened-management",
          color: "primary"
        },
        {
          text: "What are the possible outcomes?",
          path: "threatened-outcomes",
          color: "info"
        }
      ]
    },
    
    "threatened-management": {
      title: "Managing a Threatened Miscarriage",
      icon: <Stethoscope size={48} />,
      description: "Here's what healthcare providers typically recommend:",
      details: [
        "🏥 Contact your healthcare provider immediately",
        "🛏️ Bed rest may be recommended",
        "💊 No heavy lifting or strenuous activity",
        "🚫 Avoid intercourse until cleared by doctor",
        "📱 Regular monitoring with ultrasounds",
        "🩸 Track bleeding patterns"
      ],
      choices: [
        {
          text: "Bleeding has stopped",
          path: "resolution-positive",
          color: "success"
        },
        {
          text: "Bleeding is getting worse",
          path: "active-miscarriage",
          color: "danger"
        },
        {
          text: "Learn about other paths",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "active-miscarriage": {
      title: "Active Miscarriage Process",
      icon: <AlertCircle size={48} />,
      description: "Heavy bleeding and cramping indicate an active miscarriage. This is a medical situation requiring immediate attention.",
      warning: "⚠️ Seek immediate medical care",
      details: [
        "🚨 Heavy bleeding (soaking a pad per hour)",
        "😣 Severe cramping or abdominal pain",
        "🌡️ May have fever or chills",
        "💔 Pregnancy loss is likely occurring"
      ],
      choices: [
        {
          text: "What happens at the hospital?",
          path: "hospital-care",
          color: "primary"
        },
        {
          text: "What are my treatment options?",
          path: "treatment-options",
          color: "info"
        }
      ]
    },
    
    "treatment-options": {
      title: "Miscarriage Treatment Options",
      icon: <Activity size={48} />,
      description: "There are three main approaches to managing a miscarriage:",
      options: [
        {
          title: "Expectant Management",
          description: "Wait for natural passage",
          details: ["⏰ Can take 1-2 weeks", "🏠 Can be done at home", "📊 60-80% effective"]
        },
        {
          title: "Medical Management",
          description: "Medication to help pass tissue",
          details: ["💊 Misoprostol medication", "📈 80-90% effective", "🏠 Often at home"]
        },
        {
          title: "Surgical Management",
          description: "D&C procedure",
          details: ["🏥 Done in hospital/clinic", "✅ Nearly 100% effective", "⚡ Immediate resolution"]
        }
      ],
      choices: [
        {
          text: "I chose expectant management",
          path: "expectant-path",
          color: "info"
        },
        {
          text: "I chose medical management",
          path: "medical-path",
          color: "warning"
        },
        {
          text: "I chose surgical management",
          path: "surgical-path",
          color: "primary"
        }
      ]
    },
    
    "surgical-path": {
      title: "Surgical Management (D&C)",
      icon: <Stethoscope size={48} />,
      description: "You've chosen surgical management. Here's what to expect:",
      timeline: [
        { phase: "Pre-procedure", items: ["🩺 Pre-op evaluation", "🚫 Fasting required", "💉 IV placement"] },
        { phase: "Procedure", items: ["😴 Sedation or anesthesia", "⏱️ 10-20 minutes", "🏥 Outpatient usually"] },
        { phase: "Recovery", items: ["🛏️ 1-2 hours observation", "💊 Pain management", "🏠 Same day discharge"] }
      ],
      choices: [
        {
          text: "What about recovery?",
          path: "post-surgical-recovery",
          color: "success"
        },
        {
          text: "What are the risks?",
          path: "surgical-risks",
          color: "warning"
        }
      ]
    },
    
    "post-surgical-recovery": {
      title: "Recovery After D&C",
      icon: <Heart size={48} />,
      description: "Your body is healing. Here's what to expect:",
      week1: {
        title: "First Week",
        items: ["🩸 Light bleeding/spotting", "😣 Mild cramping", "💊 Pain medication as needed", "🚫 No tampons/intercourse"]
      },
      week2to4: {
        title: "Weeks 2-4",
        items: ["📉 Bleeding stops", "🔄 Normal activities resume", "📅 Follow-up appointment", "💪 Physical healing complete"]
      },
      emotional: {
        title: "Emotional Recovery",
        items: ["💔 Grief is normal", "🤝 Support groups help", "⏰ No timeline for healing", "🧠 Consider counseling"]
      },
      choices: [
        {
          text: "When can I try again?",
          path: "future-pregnancy",
          color: "info"
        },
        {
          text: "I need emotional support",
          path: "emotional-support",
          color: "primary"
        }
      ]
    },
    
    "future-pregnancy": {
      title: "Future Pregnancy Planning",
      icon: <Baby size={48} />,
      description: "Many people go on to have successful pregnancies after miscarriage.",
      stats: "85% of women who miscarry go on to have healthy pregnancies",
      timeline: [
        {
          title: "Physical Readiness",
          items: ["🩸 Wait for 1-2 normal periods", "💊 Start folic acid", "🏃‍♀️ Healthy lifestyle"]
        },
        {
          title: "Emotional Readiness",
          items: ["💭 Process your grief", "🤝 Communicate with partner", "😌 No rush - take your time"]
        },
        {
          title: "Medical Support",
          items: ["🩺 Preconception counseling", "🔬 Testing if recurrent loss", "📱 Early monitoring next time"]
        }
      ],
      choices: [
        {
          text: "Start over",
          path: "start",
          color: "primary"
        },
        {
          text: "Learn about risk factors",
          path: "risk-factors",
          color: "info"
        }
      ]
    },
    
    "risk-factors": {
      title: "Understanding Risk Factors",
      icon: <Activity size={48} />,
      description: "Several factors can increase miscarriage risk:",
      categories: [
        {
          title: "Age-Related",
          items: ["Under 35: 15% risk", "35-39: 25% risk", "40+: 35-50% risk"],
          color: "info"
        },
        {
          title: "Medical Conditions",
          items: ["Thyroid disorders", "Diabetes", "PCOS", "Autoimmune conditions"],
          color: "warning"
        },
        {
          title: "Lifestyle Factors",
          items: ["Smoking", "Alcohol use", "High caffeine", "Certain medications"],
          color: "danger"
        },
        {
          title: "Previous History",
          items: ["Prior miscarriages", "Uterine abnormalities", "Genetic factors"],
          color: "primary"
        }
      ],
      choices: [
        {
          text: "How can I reduce my risk?",
          path: "risk-reduction",
          color: "success"
        },
        {
          text: "Back to start",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "symptoms": {
      title: "Other Pregnancy Symptoms",
      icon: <Stethoscope size={48} />,
      description: "Various symptoms can occur during pregnancy. Which are you experiencing?",
      choices: [
        {
          text: "Severe nausea/vomiting",
          path: "hyperemesis",
          color: "warning"
        },
        {
          text: "Abdominal pain",
          path: "pain-evaluation",
          color: "danger"
        },
        {
          text: "No pregnancy symptoms anymore",
          path: "missed-miscarriage",
          color: "info"
        },
        {
          text: "Fever or feeling unwell",
          path: "infection-concern",
          color: "danger"
        }
      ]
    },
    
    "miscarriage-types": {
      title: "Types of Miscarriage",
      icon: <Heart size={48} />,
      description: "There are several types of miscarriage, each with different characteristics:",
      types: [
        {
          name: "Threatened",
          description: "Bleeding but cervix closed",
          outcome: "May continue normally"
        },
        {
          name: "Inevitable",
          description: "Cervix open, loss imminent",
          outcome: "Pregnancy will be lost"
        },
        {
          name: "Incomplete",
          description: "Some tissue passed",
          outcome: "Needs medical attention"
        },
        {
          name: "Complete",
          description: "All tissue passed",
          outcome: "Body handled naturally"
        },
        {
          name: "Missed",
          description: "No symptoms, found on scan",
          outcome: "Requires management decision"
        }
      ],
      choices: [
        {
          text: "Learn about each type",
          path: "type-details",
          color: "primary"
        },
        {
          text: "Back to start",
          path: "start",
          color: "secondary"
        }
      ]
    },
    
    "type-details": {
      title: "Detailed Types of Miscarriage",
      icon: <Activity size={48} />,
      description: "Click on any type below to learn more:",
      choices: [
        {
          text: "Threatened Miscarriage",
          path: "detail-threatened",
          color: "warning"
        },
        {
          text: "Inevitable Miscarriage",
          path: "detail-inevitable",
          color: "danger"
        },
        {
          text: "Incomplete Miscarriage",
          path: "detail-incomplete",
          color: "warning"
        },
        {
          text: "Complete Miscarriage",
          path: "detail-complete",
          color: "success"
        },
        {
          text: "Missed Miscarriage",
          path: "detail-missed",
          color: "info"
        },
        {
          text: "Back to types overview",
          path: "miscarriage-types",
          color: "secondary"
        }
      ]
    },
    
    "detail-threatened": {
      title: "Threatened Miscarriage - In Detail",
      icon: <Heart size={48} />,
      description: "A threatened miscarriage means you're having symptoms that might lead to miscarriage, but the pregnancy is still viable.",
      details: [
        "🩸 Light vaginal bleeding or spotting",
        "🔒 Cervix remains closed on examination",
        "💓 Fetal heartbeat usually still present",
        "📊 Occurs in 20-25% of pregnancies"
      ],
      info: "Good news: 50-70% of threatened miscarriages result in continued healthy pregnancies",
      management: {
        title: "What happens next:",
        items: [
          "🏥 Immediate medical evaluation",
          "🔬 Blood tests (hCG levels)",
          "📱 Ultrasound to check viability",
          "🛏️ Pelvic rest often recommended",
          "📅 Close monitoring with follow-ups"
        ]
      },
      choices: [
        {
          text: "What should I do right now?",
          path: "threatened-management",
          color: "primary"
        },
        {
          text: "Learn about other types",
          path: "type-details",
          color: "info"
        }
      ]
    },
    
    "detail-inevitable": {
      title: "Inevitable Miscarriage - In Detail",
      icon: <AlertCircle size={48} />,
      description: "An inevitable miscarriage means pregnancy loss cannot be prevented and will occur.",
      warning: "⚠️ Requires immediate medical attention",
      details: [
        "🔓 Cervix is open (dilated)",
        "🩸 Active bleeding, often heavy",
        "😣 Cramping and abdominal pain",
        "💔 Pregnancy tissue may be passing"
      ],
      management: {
        title: "Immediate care needed:",
        items: [
          "🚨 Go to emergency room or call provider",
          "📋 Treatment options will be discussed",
          "💊 Pain management provided",
          "🩺 Monitoring for complications",
          "🤝 Emotional support available"
        ]
      },
      choices: [
        {
          text: "Treatment options",
          path: "treatment-options",
          color: "primary"
        },
        {
          text: "Learn about other types",
          path: "type-details",
          color: "info"
        }
      ]
    },
    
    "detail-incomplete": {
      title: "Incomplete Miscarriage - In Detail",
      icon: <Activity size={48} />,
      description: "Some pregnancy tissue has passed, but some remains in the uterus.",
      warning: "⚠️ Medical intervention usually needed",
      details: [
        "🔄 Partial passage of pregnancy tissue",
        "🩸 Continued bleeding (can be heavy)",
        "🦠 Risk of infection if untreated",
        "😣 Ongoing cramping and pain"
      ],
      risks: {
        title: "Why treatment is important:",
        items: [
          "🦠 Infection risk increases over time",
          "🩸 Heavy bleeding can lead to anemia",
          "⏰ Delayed treatment = more complications",
          "💊 Quick treatment = faster recovery"
        ]
      },
      choices: [
        {
          text: "See treatment options",
          path: "treatment-options",
          color: "danger"
        },
        {
          text: "Learn about other types",
          path: "type-details",
          color: "info"
        }
      ]
    },
    
    "detail-complete": {
      title: "Complete Miscarriage - In Detail",
      icon: <Heart size={48} />,
      description: "All pregnancy tissue has passed naturally from the uterus.",
      details: [
        "✅ All tissue expelled naturally",
        "📉 Bleeding decreasing/stopped",
        "🔒 Cervix closing or closed",
        "😌 Cramping subsiding"
      ],
      recovery: {
        title: "What to expect:",
        items: [
          "🩸 Light spotting for 1-2 weeks",
          "📅 Period returns in 4-6 weeks",
          "🩺 Follow-up in 2 weeks",
          "💪 Physical recovery is quick",
          "💔 Emotional healing takes time"
        ]
      },
      choices: [
        {
          text: "Recovery information",
          path: "post-surgical-recovery",
          color: "success"
        },
        {
          text: "Future pregnancy info",
          path: "future-pregnancy",
          color: "primary"
        },
        {
          text: "Learn about other types",
          path: "type-details",
          color: "info"
        }
      ]
    },
    
    "detail-missed": {
      title: "Missed Miscarriage - In Detail",
      icon: <Activity size={48} />,
      description: "The embryo/fetus has died but the body hasn't recognized the loss yet.",
      info: "Also called 'silent miscarriage' or 'missed abortion'",
      details: [
        "🤫 Often no symptoms at all",
        "📱 Discovered during routine ultrasound",
        "❌ No fetal heartbeat detected",
        "🤰 May still 'feel' pregnant",
        "😔 Emotionally challenging diagnosis"
      ],
      why: {
        title: "Why this happens:",
        items: [
          "🧬 Usually chromosomal issues",
          "⏰ Body hasn't started process yet",
          "🤷‍♀️ No one's fault - nothing prevented it",
          "📊 Occurs in about 1% of pregnancies"
        ]
      },
      choices: [
        {
          text: "What are my options?",
          path: "treatment-options",
          color: "primary"
        },
        {
          text: "Emotional support",
          path: "emotional-support",
          color: "info"
        },
        {
          text: "Learn about other types",
          path: "type-details",
          color: "secondary"
        }
      ]
    },
    
    "emotional-support": {
      title: "Emotional Support Resources",
      icon: <Heart size={48} />,
      description: "Pregnancy loss is a significant life event. Support is available and important.",
      resources: [
        {
          title: "Immediate Support",
          items: [
            "🤝 Hospital social workers",
            "📞 Pregnancy loss hotlines",
            "💬 Online support groups",
            "🏥 Hospital chaplain services"
          ]
        },
        {
          title: "Ongoing Support",
          items: [
            "🧠 Grief counselors",
            "👥 In-person support groups",
            "📚 Books and resources",
            "🌐 Online communities"
          ]
        },
        {
          title: "Partner Support",
          items: [
            "💑 Couples counseling",
            "🗣️ Communication strategies",
            "🤲 Supporting each other",
            "⏰ Different grief timelines"
          ]
        }
      ],
      choices: [
        {
          text: "When to seek help",
          path: "when-seek-help",
          color: "primary"
        },
        {
          text: "Back to recovery",
          path: "post-surgical-recovery",
          color: "info"
        },
        {
          text: "Start over",
          path: "start",
          color: "secondary"
        }
      ]
    }
  };

  const currentNode = paths[currentPath] || paths.start;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      <nav className="navbar navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand">
            <Heart className="mr-2" size={24} />
            Pregnancy Journey Navigator
          </span>
          <div>
            <button 
              className="btn btn-outline-light btn-sm mr-2"
              onClick={goBack}
              disabled={history.length <= 1}
            >
              <ArrowLeft size={16} className="mr-1" />
              Back
            </button>
            <button 
              className="btn btn-outline-light btn-sm"
              onClick={restart}
            >
              <Home size={16} className="mr-1" />
              Start Over
            </button>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Progress Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb bg-white shadow-sm">
                {history.map((step, index) => (
                  <li key={index} className={`breadcrumb-item ${index === history.length - 1 ? 'active' : ''}`}>
                    {paths[step]?.title || 'Start'}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Main Content Card */}
            <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="mb-3" style={{ color: '#6c63ff' }}>
                    {currentNode.icon}
                  </div>
                  <h2 className="h3 font-weight-bold text-dark">
                    {currentNode.title}
                  </h2>
                </div>

                <p className="lead text-muted text-center mb-4">
                  {currentNode.description}
                </p>

                {currentNode.warning && (
                  <div className="alert alert-danger" role="alert">
                    <strong>{currentNode.warning}</strong>
                  </div>
                )}

                {currentNode.info && (
                  <div className="alert alert-info" role="alert">
                    {currentNode.info}
                  </div>
                )}

                {currentNode.details && (
                  <div className="bg-light rounded p-4 mb-4">
                    {currentNode.details.map((detail, index) => (
                      <p key={index} className="mb-2">{detail}</p>
                    ))}
                  </div>
                )}

                {currentNode.options && (
                  <div className="row mb-4">
                    {currentNode.options.map((option, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="card h-100 border-primary">
                          <div className="card-body">
                            <h5 className="card-title text-primary">{option.title}</h5>
                            <p className="card-text small">{option.description}</p>
                            {option.details.map((detail, idx) => (
                              <p key={idx} className="mb-1 small">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentNode.timeline && Array.isArray(currentNode.timeline) && (
                  <div className="mb-4">
                    {currentNode.timeline.map((phase, index) => (
                      <div key={index} className="mb-3">
                        <h5 className="text-primary">{phase.phase}</h5>
                        <div className="pl-3">
                          {phase.items.map((item, idx) => (
                            <p key={idx} className="mb-1">{item}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {currentNode.timeline && !Array.isArray(currentNode.timeline) && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.timeline.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.timeline.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.categories && (
                  <div className="row mb-4">
                    {currentNode.categories.map((category, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className={`card border-${category.color}`}>
                          <div className={`card-header bg-${category.color} text-white`}>
                            <strong>{category.title}</strong>
                          </div>
                          <div className="card-body">
                            {category.items.map((item, idx) => (
                              <p key={idx} className="mb-1 small">• {item}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentNode.types && (
                  <div className="mb-4">
                    {currentNode.types.map((type, index) => (
                      <div key={index} className="mb-3 p-3 border-left border-primary" style={{ borderLeftWidth: '4px' }}>
                        <h5 className="text-primary mb-1">{type.name}</h5>
                        <p className="mb-1">{type.description}</p>
                        <small className="text-muted">Outcome: {type.outcome}</small>
                      </div>
                    ))}
                  </div>
                )}

                {currentNode.week1 && (
                  <div className="mb-4">
                    <div className="card mb-3">
                      <div className="card-header bg-info text-white">
                        <strong>{currentNode.week1.title}</strong>
                      </div>
                      <div className="card-body">
                        {currentNode.week1.items.map((item, idx) => (
                          <p key={idx} className="mb-1">{item}</p>
                        ))}
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header bg-success text-white">
                        <strong>{currentNode.week2to4.title}</strong>
                      </div>
                      <div className="card-body">
                        {currentNode.week2to4.items.map((item, idx) => (
                          <p key={idx} className="mb-1">{item}</p>
                        ))}
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header bg-primary text-white">
                        <strong>{currentNode.emotional.title}</strong>
                      </div>
                      <div className="card-body">
                        {currentNode.emotional.items.map((item, idx) => (
                          <p key={idx} className="mb-1">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentNode.stats && (
                  <div className="text-center mb-4">
                    <div className="badge badge-success p-3" style={{ fontSize: '1.1em' }}>
                      {currentNode.stats}
                    </div>
                  </div>
                )}

                {currentNode.management && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.management.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.management.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.recovery && (
                  <div className="mb-4">
                    <h5 className="text-success">{currentNode.recovery.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.recovery.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.risks && (
                  <div className="mb-4">
                    <h5 className="text-danger">{currentNode.risks.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.risks.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.why && (
                  <div className="mb-4">
                    <h5 className="text-info">{currentNode.why.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.why.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.resources && (
                  <div className="row mb-4">
                    {currentNode.resources.map((resource, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="card h-100">
                          <div className="card-header bg-primary text-white">
                            <strong>{resource.title}</strong>
                          </div>
                          <div className="card-body">
                            {resource.items.map((item, idx) => (
                              <p key={idx} className="mb-1 small">{item}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentNode.normalGrief && (
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header bg-success text-white">
                          <strong>{currentNode.normalGrief.title}</strong>
                        </div>
                        <div className="card-body">
                          {currentNode.normalGrief.items.map((item, idx) => (
                            <p key={idx} className="mb-1">{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header bg-danger text-white">
                          <strong>{currentNode.seekHelp.title}</strong>
                        </div>
                        <div className="card-body">
                          {currentNode.seekHelp.items.map((item, idx) => (
                            <p key={idx} className="mb-1">{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentNode.nextSteps && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.nextSteps.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.nextSteps.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.outcomes && (
                  <div className="row mb-4">
                    {currentNode.outcomes.map((outcome, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="card h-100">
                          <div className="card-header bg-info text-white">
                            <strong>{outcome.title}</strong>
                          </div>
                          <div className="card-body">
                            <p className="card-text">{outcome.description}</p>
                            {outcome.items.map((item, idx) => (
                              <p key={idx} className="mb-1 small">• {item}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentNode.factors && (
                  <div className="mb-4">
                    <h5 className="text-info">{currentNode.factors.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.factors.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.whatNow && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.whatNow.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.whatNow.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.watchFor && (
                  <div className="mb-4">
                    <h5 className="text-warning">{currentNode.watchFor.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.watchFor.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.questions && (
                  <div className="mb-4">
                    {currentNode.questions.map((section, index) => (
                      <div key={index} className="mb-3">
                        <h6 className="text-primary font-weight-bold">{section.category} Questions:</h6>
                        <div className="pl-3">
                          {section.items.map((item, idx) => (
                            <p key={idx} className="mb-2">{item}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentNode.process && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.process.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.process.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.expect && (
                  <div className="mb-4">
                    <h5 className="text-warning">{currentNode.expect.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.expect.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.atHome && (
                  <div className="mb-4">
                    <h5 className="text-success">{currentNode.atHome.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.atHome.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.risks && Array.isArray(currentNode.risks) && (
                  <div className="mb-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Risk</th>
                          <th>Rate</th>
                          <th>Warning Signs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentNode.risks.map((risk, idx) => (
                          <tr key={idx}>
                            <td>{risk.risk}</td>
                            <td>{risk.rate}</td>
                            <td>{risk.signs}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {currentNode.benefits && (
                  <div className="mb-4">
                    <h5 className="text-success">{currentNode.benefits.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.benefits.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.immediate && (
                  <div className="mb-4">
                    <div className="alert alert-danger">
                      <h5>{currentNode.immediate.title || "Immediate Action Required:"}</h5>
                      {Array.isArray(currentNode.immediate) ? 
                        currentNode.immediate.map((item, idx) => (
                          <p key={idx} className="mb-2">{item}</p>
                        )) :
                        currentNode.immediate.items.map((item, idx) => (
                          <p key={idx} className="mb-2">{item}</p>
                        ))
                      }
                    </div>
                  </div>
                )}

                {currentNode.normal && (
                  <div className="mb-4">
                    <h5 className="text-success">{currentNode.normal.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.normal.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.whatToBring && (
                  <div className="mb-4">
                    <h5 className="text-info">{currentNode.whatToBring.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.whatToBring.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.preparation && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.preparation.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.preparation.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.during && (
                  <div className="mb-4">
                    <h5 className="text-warning">{currentNode.during.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.during.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.emergency && (
                  <div className="mb-4">
                    <h5 className="text-danger">{currentNode.emergency.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.emergency.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.physical && (
                  <div className="mb-4">
                    <h5 className="text-primary">{currentNode.physical.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.physical.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {currentNode.followUp && (
                  <div className="mb-4">
                    <h5 className="text-info">{currentNode.followUp.title}</h5>
                    <div className="bg-light rounded p-3">
                      {currentNode.followUp.items.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Choice Buttons */}
                <div className="mt-5">
                  <h4 className="text-center mb-4 text-muted">What would you like to do?</h4>
                  <div className="row">
                    {currentNode.choices.map((choice, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <button
                          className={`btn btn-${choice.color} btn-block p-3 shadow-sm`}
                          onClick={() => goToPath(choice.path, choice.data)}
                          style={{ borderRadius: '10px' }}
                        >
                          {choice.text}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="alert alert-warning mt-4 shadow-sm" style={{ borderRadius: '10px' }}>
              <AlertCircle className="mr-2" size={20} />
              <strong>Medical Disclaimer:</strong> This is an educational tool only. Always consult with healthcare professionals for medical advice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyJourney;