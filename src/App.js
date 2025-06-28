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

                {currentNode.timeline && (
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
