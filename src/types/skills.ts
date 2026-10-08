export interface TechSkill {
  id: number
  name: string
  description: string
  lang: string[]
  icons: React.FC<React.SVGProps<SVGSVGElement>>[]
}

export interface TechSkillsData {
  skills: TechSkill[]
}
