import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    ongoing: 0
  });

  const statsRef = useRef(null);

  const targetStats = {
    projects: 20,
    experience: 4,
    ongoing: 2
  };

  const statsData = [
    {
      icon: 'fas fa-check-circle',
      count: counts.projects,
      target: targetStats.projects,
      label: 'Completed Projects',
      suffix: '+'
    },
    {
      icon: 'fas fa-calendar-alt',
      count: counts.experience,
      target: targetStats.experience,
      label: 'Years Experience',
      suffix: ''
    },
    {
      icon: 'fas fa-code-branch',
      count: counts.ongoing,
      target: targetStats.ongoing,
      label: 'Ongoing Projects',
      suffix: ''
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.keys(targetStats).map(key => {
        const target = targetStats[key];
        const increment = target / steps;
        let current = 0;
        let step = 0;

        return setInterval(() => {
          step++;
          current = Math.min(Math.ceil(increment * step), target);

          setCounts(prev => ({
            ...prev,
            [key]: current
          }));

          if (step >= steps) {
            clearInterval(intervals.find(interval => interval === this));
          }
        }, stepDuration);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [isVisible]);

  return (
    <section ref={statsRef} className="stats">
      <div className="container">
        <div className="stats-content">
          <div className="stats-header">
            <h2 className="stats-title">My Achievements</h2>
            <p className="stats-subtitle">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    {stat.count}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-bar"
                    style={{
                      width: isVisible ? `${(stat.count / stat.target) * 100}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;