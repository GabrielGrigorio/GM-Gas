import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/playMovie")
public class MovieRedirectServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // URL do filme que você deseja reproduzir
    private static final String MOVIE_URL = "https://link-para-o-filme.com"; // Substitua pelo link real do filme

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Redireciona para a URL do filme
        response.sendRedirect(MOVIE_URL);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Chama o método doGet para redirecionar
        doGet(request, response);
    }
}