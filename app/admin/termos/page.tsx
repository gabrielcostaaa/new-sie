"use client"

import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card"
import { useSearchParams } from 'next/navigation'
import { UserTermsAccept } from "@/backend/usuario/RepositorioUsuario"
import { useState } from "react"

export default function TermsAccepted() {

    const router = useRouter();
    const { toast } = useToast();
    const searchParams = useSearchParams();
    const userId = searchParams.get('id');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleAcceptTerms = async () => {
        setLoading(true);
        setError(null);
        try {
        if (userId) {

            await UserTermsAccept(Number(userId));
            setSuccess(true);
            router.push('/admin')
            toast({
              title: "Está permitido o tratamento de dados",
              description: "Você aceitou os termos de uso e privacidade",
              variant: "default"
            });
        } else {
            setError("ID do usuário não encontrado.");
        }
        } catch (err) {
        setError("Ocorreu um erro ao aceitar os termos.");
        } finally {
        setLoading(false);
        }
    };

    return(
<div className="max-w-7xl mx-auto grid gap-8 p-8">
  <div>
    <h1 className="text-2xl font-semibold">Termos de Uso</h1>
    <h3 className="text-lg text-gray-600 mt-2">
      Leia atentamente. É necessário aceitar os termos de uso para utilizar a
      plataforma.
    </h3>
  </div>

  <Card>
    <CardContent>
      <article className="grid w-full items-center gap-4 text-justify">
        <h2 className="text-xl font-semibold mb-4">
          Termos de Uso e Política de Privacidade
        </h2>
        <p>
          <strong>Associação dos Municípios do Oeste de Santa Catarina</strong>
          <br />
          <span>CNPJ: 82.805.961/0001-38</span>
          <br />
          <span>
            Endereço: Av. Getúlio Dorneles Vargas, 571S, Centro, Chapecó – SC,
            89812-000
          </span>
        </p>
        <p className="mt-4">
          <strong>Data de Vigência: 01/01/2024</strong>
        </p>

        <h3 className="text-lg font-semibold mt-6">1. Introdução</h3>
        <p>
          Bem-vindo à plataforma de inscrição de eventos da Associação dos
          Municípios do Oeste de Santa Catarina. Esta Política de Privacidade
          tem como objetivo informar sobre como coletamos, utilizamos,
          armazenamos e protegemos os dados pessoais dos usuários que se
          inscrevem em nossos eventos.
        </p>

        <h3 className="text-lg font-semibold mt-6">2. Dados Coletados</h3>
        <p>
          Coletamos os seguintes dados pessoais dos usuários:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Nome completo</li>
          <li>CPF (Cadastro de Pessoa Física)</li>
          <li>RG (Registro Geral)</li>
          <li>E-mail</li>
          <li>Número de telefone</li>
          <li>Nacionalidade</li>
          <li>Estado e cidade de residência</li>
          <li>Ocupação</li>
          <li>Cidade de trabalho</li>
          <li>Entidade (opcional)</li>
          <li>Número de registro de trabalho (opcional)</li>
          <li>Avatar (opcional)</li>
          <li>Data de nascimento</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">3. Finalidade do Tratamento</h3>
        <p>
          Os dados coletados são utilizados para as seguintes finalidades:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Inscrição de participantes e palestrantes em eventos.</li>
          <li>Identificação do usuário para emissão de certificados e declarações.</li>
          <li>Emissão de ingressos.</li>
          <li>Controle de presença em eventos.</li>
          <li>Comunicação de informações relevantes sobre eventos.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">4. Base Legal</h3>
        <p>
          A coleta e o tratamento dos dados pessoais dos usuários são realizados
          com base no consentimento, conforme previsto na Lei Geral de Proteção
          de Dados (LGPD). Ao se inscrever, o usuário concorda com o uso de seus
          dados conforme descrito nesta política.
        </p>

        <h3 className="text-lg font-semibold mt-6">5. Compartilhamento de Dados</h3>
        <p>
          Os dados pessoais dos usuários poderão ser compartilhados com:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>
            Administradores do sistema, para gerenciamento das inscrições e
            controle de presença.
          </li>
          <li>
            Terceiros, quando necessário, para cumprimento das finalidades
            descritas acima.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">6. Direitos dos Titulares</h3>
        <p>
          Os usuários têm os seguintes direitos em relação aos seus dados
          pessoais:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>
            <strong>Acesso:</strong> solicitar informações sobre os dados que
            temos a seu respeito.
          </li>
          <li>
            <strong>Correção:</strong> solicitar a correção de dados incompletos
            ou incorretos.
          </li>
          <li>
            <strong>Exclusão:</strong> solicitar a remoção de seus dados,
            mediante solicitação.
          </li>
          <li>
            <strong>Revogação do Consentimento:</strong> solicitar a revogação
            do consentimento para o tratamento dos dados.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">7. Segurança dos Dados</h3>
        <p>
          Adotamos medidas de segurança apropriadas para proteger os dados
          pessoais contra acesso não autorizado, alteração, divulgação ou
          destruição.
        </p>

        <h3 className="text-lg font-semibold mt-6">8. Retenção de Dados</h3>
        <p>
          Os dados pessoais dos usuários serão mantidos por tempo indeterminado,
          podendo ser excluídos mediante solicitação do usuário.
        </p>

        <h3 className="text-lg font-semibold mt-6">9. Contato</h3>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre esta Política
          de Privacidade, entre em contato conosco:
        </p>
        <p>
          <strong>E-mail:</strong> informatica1@amosc.org.br
          <br />
          <strong>Telefone:</strong> (49) 3319-3207
        </p>

        <h3 className="text-lg font-semibold mt-6">10. Alterações na Política</h3>
        <p>
          A presente Política de Privacidade pode ser alterada a qualquer
          momento. Quaisquer mudanças serão comunicadas aos usuários por meio de
          notificações em nossa plataforma.
        </p>
      </article>
    </CardContent>
  </Card>

  <div className="flex items-center space-x-4 mt-6">
    <p className="flex-auto">
      Ao aceitar os termos, uma cópia será enviada para o email cadastrado em
      sua conta.
    </p>
    <button 
    className={`flex-auto py-2 px-4 rounded-sm ${
        loading || success ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white'
      }`}
    onClick={handleAcceptTerms}
    disabled={loading || success}>
    {loading || success ? 'Já aceitou os termos' : 'Concordo com os termos de uso e privacidade'}
    </button>
  </div>
</div>
    )
}