# Fami Privacy Blur

Extensão para Edge/Chrome que aplica blur opcional na lista de conversas do WhatsApp Web.
Começa desligada; o colaborador liga quando vai mostrar a tela.

## Uso

- Clique no ícone da extensão: abre uma telinha com um switch (liga/desliga o blur) e um
  slider pra ajustar a intensidade do desfoque (1px a 20px).
- `Alt+Shift+B`: liga/desliga o blur direto, sem abrir a telinha.
- Badge **ON** no ícone = blur ativo.
- Passar o mouse sobre uma conversa revela só ela.

## Teste local (Edge)

1. Abra `edge://extensions`.
2. Ative **Modo de desenvolvedor** (canto inferior esquerdo).
3. **Carregar sem pacote** → selecione a pasta `extension/`.
4. Abra `https://web.whatsapp.com` e aperte `Alt+Shift+B`.
5. Alterou algum arquivo? Clique em **Recarregar** na extensão e dê F5 no WhatsApp.

No Chrome é igual, em `chrome://extensions`.

Se o atalho não funcionar (conflito com outra extensão), ajuste em `edge://extensions/shortcuts`.

## Checklist de teste

- [ ] Blur liga/desliga pelo atalho e pelo switch no popup
- [ ] Slider do popup muda a intensidade do blur em tempo real
- [ ] Badge acompanha o estado
- [ ] Hover revela só a conversa sob o mouse
- [ ] Estado se mantém após fechar e abrir o navegador
- [ ] Rolar a lista e receber mensagem nova: conversas novas também ficam borradas
- [ ] Funciona no PWA do WhatsApp (Edge → ... → Aplicativos → Instalar este site como aplicativo)

## Para a conversa com Segurança

- **Permissões:** apenas `storage` (guarda o liga/desliga localmente).
- **Escopo:** só roda em `https://web.whatsapp.com/*`.
- **Dados:** não lê, não armazena e não transmite conteúdo de conversa. O script só adiciona/remove
  uma classe CSS no `<html>`. Sem chamadas de rede, sem dependências externas.
- **Limitação:** é proteção visual. Notificações do Windows continuam mostrando prévia da mensagem;
  DevTools permite desligar o blur. WhatsApp Desktop (app nativo) não suporta extensão.
- **Distribuição sugerida:** Intune, `ExtensionSettings` com `installation_mode: "normal_installed"`,
  e bloqueio posterior da extensão externa usada hoje.
