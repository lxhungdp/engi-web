export interface FloatingSpec {
  id: string;
  label: string;
  icon: string;
}

export interface AeroVoltMetric {
  value: string;
  label: string;
}

export interface AeroVoltFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AeroVoltUseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface AeroVoltSpec {
  label: string;
  value: string;
}

export interface AeroVoltWorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface AeroVoltModel {
  id: string;
  name: string;
  description: string;
  output: string;
  icon: string;
  highlight?: boolean;
}
