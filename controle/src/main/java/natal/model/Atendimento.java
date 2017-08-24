package natal.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "atendimento")
@XmlRootElement
public class Atendimento implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	@Version
	@Column(name = "version")
	private int version;

	@Column(name = "ordem")
	private String ordem;

	@Column(name = "tecnico")
	private String tecnico;

	@Column(name = "entrada")
	private String entrada;

	@Column(name = "nodo")
	private String nodo;

	@Column(name = "Endereco")
	private String endereco;

	public Long getId() {
		return this.id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public int getVersion() {
		return this.version;
	}

	public void setVersion(final int version) {
		this.version = version;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Atendimento)) {
			return false;
		}
		Atendimento other = (Atendimento) obj;
		if (id != null) {
			if (!id.equals(other.id)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	public String getOrdem() {
		return ordem;
	}

	public void setOrdem(String ordem) {
		this.ordem = ordem;
	}

	public String getTecnico() {
		return tecnico;
	}

	public void setTecnico(String tecnico) {
		this.tecnico = tecnico;
	}

	public String getEntrada() {
		return entrada;
	}

	public void setEntrada(String entrada) {
		this.entrada = entrada;
	}

	public String getNodo() {
		return nodo;
	}

	public void setNodo(String nodo) {
		this.nodo = nodo;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		String result = getClass().getSimpleName() + " ";
		if (ordem != null && !ordem.trim().isEmpty())
			result += "ordem: " + ordem;
		if (tecnico != null && !tecnico.trim().isEmpty())
			result += ", tecnico: " + tecnico;
		if (entrada != null && !entrada.trim().isEmpty())
			result += ", entrada: " + entrada;
		if (nodo != null && !nodo.trim().isEmpty())
			result += ", nodo: " + nodo;
		if (endereco != null && !endereco.trim().isEmpty())
			result += ", endereco: " + endereco;
		return result;
	}
}