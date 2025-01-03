<script setup>
import WelcomeItem from './WelcomeItem.vue'
import CogIcon from './icons/IconCog.vue'
import WrenchIcon from './icons/IconWrench.vue'
import WrenchScrewdIcon from './icons/IconWrenchScrewd.vue'
import IconPhoneIcon from './icons/IconPhone.vue'
import Cog6Icon from './icons/IconCog6.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CogIcon />
    </template>
    <template #heading><span class="text-metalfix-blue font-bold">Usinagem de Precisão e Peças Sob Medida</span></template>
    Fabricação de componentes mecânicos com alta precisão e qualidade. Nossa estrutura completa permite
    a produção de peças customizadas para projetos industriais, garantindo acabamento superior e entregas ágeis.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <WrenchIcon />
    </template>
    <template #heading><span class="text-metalfix-blue font-bold">Manutenção Industrial Especializada</span></template>
    Serviços de manutenção para máquinas industriais, extrusoras, agrícolas e perfuratrizes.
    Atendimento técnico 24h para emergências, com foco em minimizar paradas e maximizar a
    eficiência dos equipamentos.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <WrenchScrewdIcon />
    </template>
    <template #heading><span class="text-metalfix-blue font-bold">Reparo e Recuperação de Peças</span></template>
    Recuperação e reparo de componentes metálicos com soluções rápidas e econômicas.
    Utilizamos técnicas avançadas para restaurar peças desgastadas, mantendo as
    especificações originais do fabricante.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconPhoneIcon />
    </template>
    <template #heading><span class="text-metalfix-blue font-bold">Atendimento Rápido e Eficiente</span></template>
    Atendimento ágil via WhatsApp para orçamentos e consultas. Localização estratégica
    para pronto atendimento, oferecendo soluções rápidas e confiáveis para sua empresa.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Cog6Icon />
    </template>
    <template #heading><span class="text-metalfix-blue font-bold">Máquinas Pesadas e Equipamentos</span></template>
    Manutenção especializada em máquinas pesadas e equipamentos industriais de grande porte.
    Equipe qualificada e ferramental adequado para serviços complexos com máxima segurança.
  </WelcomeItem>
</template>
