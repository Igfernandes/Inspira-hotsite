    <!-- MODAL WHATSAPP -->
<div class="modal fade modalWhatsApp" id="modalWhatsApp" tabindex="-1" role="dialog" aria-labelledby="modalWhatsApplLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="modalWhatsAppLabel">WhatsApp</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <p>Coloque seu nome, número de celular e e-mail para falar conosco por WhatsApp agora.</p>
            <div class="form-container">
                <div class="form-wrapper">
                  <form action="" name="wpp" id="form-wpp">

                    <!-- input nome -->
                    <div class="form-group">
                      <label for="Nome" class="text-uppercase">Nome completo</label>
                      <input name="Nome" type="text" class="p-2" placeholder="DIGITE SEU NOME*" required>
                    </div>

                    <!-- input email -->
                    <div class="form-group">
                      <label for="Email" class="text-uppercase mt">E-mail</label>
                      <input name="Email" type="email" class="p-2" placeholder="SIGITE SEU E-MAIL*" required>
                    </div>

                    <!-- input telefone -->
                    <div class="form-group">
                      <label for="tel" class="text-uppercase mt">Telefone</label>
                      <input type="tel" name="Telefone" class="form-control js-input-celular" id="tel" aria-describedby="tel" required>
                    </div>

                    <!-- input checkbox -->
                    <div class="form-check">
                      <input name="Termos" class="form-check-input" type="checkbox" id="Check" value="aceito" required>
                      <label class="form-check-label text-uppercase" for="Check">
                        Eu li e aceito os termos e
                      Política de Privacidade.
                      </label>
                    </div>

                    <!-- botão enviar -->
                    <button id="form-botao-wpp" type="submit"  class="text-uppercase" >Solicitar mais informações</button>

                  </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

    